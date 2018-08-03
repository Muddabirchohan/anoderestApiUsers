import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import ProductDescription from './ProductDescription';

export default class RoutersComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact={true} path="/" component={App}/>         
        <Route path="/description" component={ProductDescription}/> 
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
