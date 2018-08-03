import React, { Component } from 'react';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';


class ProductDescription extends Component {

  constructor() {
    super();
    this.state = {

    }
  }



  render() {
console.log(this.props);

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
       products description
  
        </div>
      </ThemeProvider >
    );
  }
}

export default ProductDescription;
