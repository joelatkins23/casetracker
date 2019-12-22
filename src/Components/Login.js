import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup, ButtonToolbar, Container, Row } from 'react-bootstrap';
import auth from '../auth'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (

<div>
{/* <h1>Login</h1> */}
    <center className="mt-5">
            <div className="top-sec">
                <center><span>Login</span></center>
            </div>
            <div className="loginBox">
              <form method="post" action="/login">
               
                <InputGroup className="mb-3">

                  <FormControl aria-describedby="basic-addon1" placeholder="Enter Email" name="email" required="required" />
                </InputGroup>

                <FormControl type="password" aria-describedby="basic-addon1" placeholder="***********" name="password" required="required" />
                <div className="button1">
                  <ButtonToolbar >
                    <Button type="submit">Login</Button>
                    <Link to="/Registration" className="register ml-3">Register</Link>
                  </ButtonToolbar>

                </div>
                {/* <input type="submit"/> */}
              </form>
              {/* <button onClick={()=>{

      auth.login();
    }}>Login</button> */}

            </div>
          </center>
</div>

        )}
}
export default Login;