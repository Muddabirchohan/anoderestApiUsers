import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import { Form, FormControl } from 'react-bootstrap/lib';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Grid from 'react-bootstrap/lib/Grid';
import { Row, Col } from 'react-bootstrap/lib';
import Card from 'react-toolbox/lib/card';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
// import Link from 'react-toolbox/lib';
import {Link} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      myDescription: {},
      change: false,
      myname: '',
      myage: '',
      allusers: false,
      filteredArray: [],
    details: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.gotoLogin = this.gotoLogin.bind(this);
    this.handleChangemyname = this.handleChangemyname.bind(this);
    this.handleChangeMyAge = this.handleChangeMyAge.bind(this);
    this.getFiltered = this.getFiltered.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }


  componentDidMount() {
    axios('http://localhost:4000/api/user')
      .then(res => {
        const users = res.data;
        let array = Object.values(users);
        console.log(array)
        this.setState({ users: array });
      })
  }

  handleChange(e) {
    this.setState({ vote: e.target.value });
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangemyname(e) {
    this.setState({ myname: e.target.value });
  }

  handleChangeMyAge(e) {
    this.setState({ myage: e.target.value });
  }

  handleChangeSearch(e){
    this.setState({ search : e.target.value })
   
  }

  gotoLogin(e) {
    let { users } = this.state;
    var flg = false;
    e.preventDefault();
    const found = users.map((obj) => {
      if (obj.name == this.state.name && obj.age == this.state.myage) {
        this.setState({ change: !this.state.change })
        flg = false
      }
      else if (flg == true) {
        alert('user not found ');
        flg = false;
      }
    })
  }

  getFiltered(e) {

    let { users } = this.state;
    const filter = e.target.value;
    let filteredArray = [];

    users.forEach((user) => {
      if (user.name === filter) {
        filteredArray.push(user);
      }
    else if (filter === 'all') {
      filteredArray.push(user);  
      }
    })
    this.setState({filteredArray})
    console.log('filteredArray', this.state.filteredArray)
  }


  getProductDetails(obj){
   let details=[];
   details.push(obj);
   this.setState({ details })
  //  console.log(this.state.details);
  }


  render() {

    console.log(this.state.filteredArray);
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppBar title='React Toolbox' leftIcon='menu' >
            {/* <Link to="/description"> desc </Link> */}
          </AppBar>


          <br/>
          {!this.state.change && <div>

 
            <div style={{ width: '320px', marginLeft: '500px' }}>
              <Card>
                <Form onSubmit={this.gotoLogin} style={{ height: '260px', paddingLeft: '5px', paddingRight: '5px' }} >
                  <h1> Login Form </h1>
                  <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Enter Name"
                    name="name"
                    onChange={this.handleChangeName}

                  />

                  <br />
                  <FormControl
                    type="password"
                    value={this.state.myage}
                    name="age"
                    placeholder="Enter pass"
                    onChange={this.handleChangeMyAge}
                  />
                  <br /><br /><br />
                  {/* <input type="submit"/> */}
                  <Button type="submit" bsStyle="info"> submit </Button>
                </Form>
              </Card>
            </div>
            <br /><br />
          </div>

          }

          <div>
            <h3> Filter By Category </h3>
            <select onChange={this.getFiltered}>
            <option value="selected" > selected  </option>
            <option value="muddabir"> muddabir  </option>
              <option value="mussadiq"> mussadiq  </option>
              <option value="ahmed"> ahmed  </option>
              <option value="all"> all  </option>
              
            </select>
          </div>

          {this.state.change && <div className="div1" >

            {this.state.filteredArray.map((obj) => {
              
const newTo = { 
  pathname: "/description", 
  state: this.state.details 
};
              return (
                <Card style={{ width: '270px', height: '280px', marginTop: '35px', marginLeft: '45px' }}>
                  <p> <h5> {obj._id}   </h5> </p>
                  <p> <img src={obj.image} width="85%" /></p>
                  <p> <h5> {obj.name}  </h5> </p>
                  <p> <h5> {obj.age}  </h5> </p>
                  <p> <h5> {obj.gender}  </h5> </p>
                  <p> <Link to={newTo}>  <Button bsStyle="info" onClick={this.getProductDetails.bind(this,obj)}> Details  </Button> </Link>  </p>
                </Card>
              )
      })}

            <br /><br /><br /><br />
          </div>

    }








  {/* {this.state.allusers && this.state.users.map((obj) => {
              
              const newTo = { 
                pathname: "/description", 
                state: this.state.details 
              };
                            return (
                              <Card style={{ width: '270px', height: '280px', marginTop: '35px', marginLeft: '45px' }}>
                                <p> <h5> {obj._id}   </h5> </p>
                                <p> <img src={obj.image} width="85%" /></p>
                                <p> <h5> {obj.name}  </h5> </p>
                                <p> <h5> {obj.age}  </h5> </p>
                                <p> <h5> {obj.gender}  </h5> </p>
                                <p> <Link to={newTo}>  <Button bsStyle="info" onClick={this.getProductDetails.bind(this,obj)}> Details  </Button> </Link>  </p>
                              </Card>
                            )
                    })} */}



          <br /><br /><br /><br />


       

        </div>
      </ThemeProvider >
    );
  }
}

export default App;
