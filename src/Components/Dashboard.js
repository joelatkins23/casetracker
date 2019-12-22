import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup, ButtonToolbar, Container, Row, Col } from 'react-bootstrap';
import auth from '../auth'
import './dashboard.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Dashboard extends Component {
    constructor(props){
        super(props);
        console.log("done")
        this.props.handleChange()
    }
    componentDidUpdate(){
        console.log("done")
       

    }
    render(){
        return(
<div>
<Container className="mt-5">
  <Row>
    <Col lg={3}>
        <div  className="register">
            <Link to="/Contacts"><h2>Go To The Contacts</h2></Link>
         </div>   
    </Col>
    <Col lg={3}>
        <div  className="register">
            <Link  to="/MedicalRequestList"><h2>Medical Requests List</h2></Link>
         </div>   
    </Col>
  </Row>
</Container>
    {/* <center className="mt-5">
    <div>

        <div>
            <Link className="link" to="/Contacts" className="register"><h2>Contacts </h2>
            </Link>
        </div>

        <Link className="link" to="/MedicalRequestList" className="register"><h2>Medical requests list</h2>
        </Link>
    
    </div>
</center> */}
</div>
        )}
    }
    export default  Dashboard;