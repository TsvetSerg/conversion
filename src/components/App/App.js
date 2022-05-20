import './App.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Converter from '../Converter/Converter'
import * as СurrencyApi from '../../utils/СurrencyApi'
import React from 'react';


function App() {

  const [isСurrency, setСurrency] = React.useState({});

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

  function handelLocal() {
    let valute = JSON.parse(localStorage.getItem('Сurrency'))
    setСurrency(valute)
  }

  function getExchangeRate(from, to) {
    СurrencyApi.getСurrency(from, to)
    .then((i) => {
      localStorage.setItem('Сurrency', JSON.stringify(i))
    })
    .then(() => {
      handelLocal()
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

        <Route exact path='/exchange'>
            <h1>11111</h1>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
