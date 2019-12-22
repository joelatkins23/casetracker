import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup, ButtonToolbar } from 'react-bootstrap';
import auth from '../auth'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Regestration extends Component {
    render(){
        return(

            <div>
              <center className="mt-5">
              <div className="top-sec">
                <center><span>registration</span></center>
            </div>

            <div className="loginBox">
              <form method="post" action="/newuser">
              <InputGroup className="mb-3">

<FormControl aria-describedby="basic-addon1" placeholder="Username" name="username" required="required" />
</InputGroup>
                <InputGroup className="mb-3">

                  <FormControl aria-describedby="basic-addon1" placeholder="Email" name="email" required="required" />
                </InputGroup>

                <FormControl aria-describedby="basic-addon1" placeholder="Password" name="password" required="required" />
                <div className="button1">
                  <ButtonToolbar >
                    <Button type="submit" variant="dark">Register</Button>
                    <Link to="/Login" className="register ml-3">Login</Link>
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
        )
    }
}
export default Regestration;