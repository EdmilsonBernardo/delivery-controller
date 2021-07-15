import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import DeliveryList from './pages/DeliveryList';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login }/>
      <Route exact path="/delivery-list" component={ DeliveryList }/>
    </Switch>
  );
}

export default App;
