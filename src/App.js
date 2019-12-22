import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home';
// import Secret from './Components/Secret';
import Login from './Components/Login';
import Regestration from './Components/registration';
import Contact from './Components/contact';
import Request from './Components/request';
import auth from './auth'
import Dashboard from './Components/Dashboard';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup, ButtonToolbar } from 'react-bootstrap';
import { ProtectedRoute } from './Components/protected.route'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
}
  state = {
    user:"notuser"
  };
  handleChange(event) {
    console.log("sone")
    this.setState({
      user: "user"
    });
   }


  componentDidMount() {

    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(
        res =>
          // this.setState({ data: res.express })
          console.log(res.express)
      )
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/displayuser');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar collapseOnSelect expand="lg" className="bg-clr">
            <Navbar.Brand href="/">Case-Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link href="/dashboard">dashboard</Nav.Link> */}
               {
               
               this.state.user=="notuser" ?  (
                <Nav.Link href="/Registration">
               SignUp
               </Nav.Link>
               
               
               ):
               ( 
                <Nav.Link href="/dashboard">dashboard</Nav.Link>)
              }
               {
               this.state.user=="notuser" ?  (
               <Nav.Link href="/Login">
                Login
                </Nav.Link>
  
               
               ):( 
                <Nav.Link href="/Login">
              Logout
                </Nav.Link>)
              
              
              
                }

              </Nav>

            </Navbar.Collapse>
          </Navbar>
          {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Secret">About</Link>
          </li>
         
        </ul> */}

          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/login">
              <Login />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard  handleChange = {this.handleChange}/>
              </Route>
              <Route path="/Contacts">
                <Contact handleChange = {this.handleChange}/>
                </Route>
                <Route exact path="/MedicalRequestList">
                <Request handleChange = {this.handleChange} />
              </Route>
              <Route exact path="/Registration">
                <Regestration />
              </Route>
              {/* <ProtectedRoute path="/Secret" />
              <Secret /> */}
            
          </Switch>
            {/* <center>
            <div className="loginBox">
              <form method="post" action="/check"> */}
            {/* <input
           type="text" placeholder="Name" name="name"/> */}
            {/* <InputGroup className="mb-3">

                  <FormControl aria-describedby="basic-addon1" placeholder="Email" name="email" required="required" />
                </InputGroup>

                <FormControl type="password" aria-describedby="basic-addon1" placeholder="Password" name="password" required="required" />
                <div className="button1">
                  <ButtonToolbar >
                    <Button type="submit" variant="dark">Submit</Button>
                    <Link to="/" className="register">Register</Link>
                  </ButtonToolbar>

                </div> */}
            {/* <input type="submit"/> */}
            {/* </form> */}
            {/* <button onClick={()=>{

      auth.login();
    }}>Login</button> */}

            {/* </div>
          </center> */}
        
        </div>
      </Router>
        );
      }
    }
    
export default App;