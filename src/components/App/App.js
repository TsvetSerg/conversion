import './App.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Converter from '../Converter/Converter'
import * as СurrencyApi from '../../utils/СurrencyApi'
import React from 'react';


function App() {

  React.useEffect(() => {
    СurrencyApi.getСurrency();
  }, [])

  return (
    <div className="page__container">
      <Switch>
        <Route exact path='/'>
            <Converter/>
        </Route>

        <Route exact path='/exchange'>
            <h1>11111</h1>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
