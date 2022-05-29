import './App.css';
import { Route, Switch } from 'react-router-dom';
import Converter from '../Converter/Converter';
import Rates from '../Rates/Rates';
import * as СurrencyApi from '../../utils/СurrencyApi';
import * as RatesApi from '../../utils/RatesApi';
import * as CurrDataApi from '../../utils/CurrDataApi';
import React from 'react';


function App() {

  const [isСurrency, setСurrency] = React.useState({});
  const [isRates, setRates] = React.useState([]);
  const [unit, setUnit] = React.useState('');

  function handelLocalVal() {
    let valute = JSON.parse(localStorage.getItem('Сurrency'))
    setСurrency(valute)
    setUnit(valute.result)
  }

  function handelLocalRat() {
    let rates = JSON.parse(localStorage.getItem('rates'))
    setRates(rates)
  }

  function getExchangeRate(from, to) {
    СurrencyApi.getСurrency(from, to)
    .then((i) => {
      localStorage.setItem('Сurrency', JSON.stringify(i))
    })
    .then(() => {
      handelLocalVal()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function getFixRate(from, to) {
    CurrDataApi.Convert(from, to)
    .then((i) => {
      localStorage.setItem('Сurrency', JSON.stringify(i))
    })
    .then(() => {
      handelLocalVal()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function getLatesQuote(base) {
    RatesApi.getRates(base)
    .then((i) => {
      let result = getKeys(i.rates)
      localStorage.setItem('rates', JSON.stringify(result))
    })
    .then(() => {
      handelLocalRat()
    })
    .catch((err) => {
      console.log(err);
      getLatesQuoteData(base)
    })
  }

  function getLatesQuoteData(base) {
    CurrDataApi.Lair(base)
    .then((i) => {
      let result = getKeys(i.rates)
      localStorage.setItem('rates', JSON.stringify(result))
    })
    .then(() => {
      handelLocalRat()
    })
    .catch((err) => {
      console.log(err);
    })
  }


  function getKeys(item) {
    let result = Object.keys(item).map((key) => {
      return {[key]: item[key]};
    })
    return result
  }

  return (
    <div className="page__container">
      <Switch>
        <Route exact path='/'>
            <Converter
              currency = {isСurrency}
              exchangeRate = {getExchangeRate}
              unit = {unit}
            />
        </Route>

        <Route exact path='/rates'>
            <Rates
              rates = {isRates}
              lastQuote = {getLatesQuote}
            />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
