import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Description from './Description';
import ProductDescription from './ProductDescription';
import RoutersComponent from './RoutersComponent';



ReactDOM.render(
<RoutersComponent/>, document.getElementById('root'));
registerServiceWorker();
