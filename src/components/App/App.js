import './App.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Converter from '../Converter/Converter';
import Rates from '../Rates/Rates';
import * as СurrencyApi from '../../utils/СurrencyApi';
import * as RatesApi from '../../utils/RatesApi';
import * as CurrDataApi from '../../utils/CurrDataApi';
import React from 'react';


function App() {

  const [isСurrency, setСurrency] = React.useState({});
  const [isRates, setRates] = React.useState({});

  // React.useEffect(() => {
  //   СurrencyApi.getСurrency('USD', 'EUR')
  //   .then((item) => {
  //     localStorage.setItem('Сurrency', JSON.stringify(item))
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, [])

  // React.useEffect(() => {
  //   let valute = JSON.parse(localStorage.getItem('Сurrency'))
  //   setСurrency(valute)
  // }, [])

  function handelLocalVal() {
    let valute = JSON.parse(localStorage.getItem('Сurrency'))
    setСurrency(valute)
  }

  function handelLocalRat() {
    let rates = JSON.parse(localStorage.getItem('rates'))
    setRates(rates)
  }

  function getExchangeRate(from, to) {
    // СurrencyApi.getСurrency(from, to)
    // .then((i) => {
    //   localStorage.setItem('Сurrency', JSON.stringify(i))
    // })
    // .then(() => {
    //   handelLocalVal()
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  }

  function getLatesQuote(base) {
    RatesApi.getRates(base)
    .then((i) => {
      localStorage.setItem('rates', JSON.stringify(i.rates))
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
      localStorage.setItem('rates', JSON.stringify(i.rates))
    })
    .then(() => {
      handelLocalRat()
    })
    .catch((err) => {
      console.log(err);
    })
  }



  return (
    <div className="page__container">
      <Switch>
        <Route exact path='/'>
            <Converter
              currency = {isСurrency}
              exchangeRate = {getExchangeRate}
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
