import './App.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Converter from '../Converter/Converter'

function App() {
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
