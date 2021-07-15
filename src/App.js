import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import DeliveryList from './pages/DeliveryList';
import { DeliveryProvider } from './Context/DeliveryProvider';
import './App.css';

function App() {
  return (
    <DeliveryProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/delivery-list" component={DeliveryList} />
      </Switch>
    </DeliveryProvider>
  );
}

export default App;
