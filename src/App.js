import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './pages/Login';
import DeliveryList from './pages/DeliveryList';
import { DeliveryProvider } from './Context/DeliveryProvider';
import Record from './pages/Record';
import './App.css';
import Edit from './pages/Edit';

function App() {
  return (
    <DeliveryProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/delivery-list" component={DeliveryList} />
          <Route exact path="/record" component={Record} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </DeliveryProvider>
  );
}

export default App;
