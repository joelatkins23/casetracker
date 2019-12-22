import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup, ButtonToolbar,Modal } from 'react-bootstrap';
import auth from '../auth'
import './dashboard.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Addrequest extends Component {
    constructor(){

        super();
        this.state={
            show:false,
        }
    }
    
    render(){
      function  handleClose(){
          console.log("hello")
      }
        return(
<div>
    <center>
<form method="post" action="/saverequest" className="mt-2">
<InputGroup className="mb-3">
             
             <FormControl aria-describedby="basic-addon1" placeholder="Salutation" name="Salutation" required="required" /><br/>
             </InputGroup>
             <InputGroup className="mb-3">
                <FormControl aria-describedby="basic-addon1" placeholder="First Name" name="first" required="required" />
                </InputGroup>
                <InputGroup className="mb-3">
               <FormControl  aria-describedby="basic-addon1" placeholder="Last Name" name="last" required="required" />
               </InputGroup>
               
               <InputGroup className="mb-3"><FormControl aria-describedby="basic-addon1" placeholder="Enter Company Name" name="companyName" required="required" />
               </InputGroup>
               
               <InputGroup className="mb-3"><FormControl aria-describedby="basic-addon1" placeholder="Enter Title" name="title" required="required" />
               </InputGroup>
               <InputGroup className="mb-3"> <FormControl aria-describedby="basic-addon1" placeholder="Tags (This should be material c)" name="tags" required="required" />
               </InputGroup>
               <div className="button1">
                 <ButtonToolbar >
                   <Button type="submit" variant="dark">Save</Button>
                  
                 </ButtonToolbar>

               </div>
               {/* <input type="submit"/> */}
             </form>

             <Link to="/MedicalRequestList" className="add-btn">Back</Link>
             
            


</center>
</div>
        )}
    }
    export default  Addrequest;