import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup, ButtonToolbar,Modal } from 'react-bootstrap';
import auth from '../auth'
import './dashboard.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class EditContect extends Component {
    constructor(props){

        super(props);
        this.state={
            show:false,
        }
    }
    componentDidMount(){

        console.log(this.props.firstName)
    }
    
    render(){
      function  handleClose(){
          console.log("hello")
      }
        return(
<div>
    <center>
<h1> Edit MedicalRequestList</h1>
<form method="post" action="/editcontact">
               
               <InputGroup className="mb-3">
               <FormControl aria-describedby="basic-addon1" value={this.props.id} placeholder="Salutation" name="id" required="required" /><br/>
             </InputGroup>
               <InputGroup className="mb-3">
             <FormControl aria-describedby="basic-addon1"placeholder={this.props.Salutation}  name="Salutation" required="required" /><br/>
             </InputGroup>
             <InputGroup className="mb-3">
                <FormControl aria-describedby="basic-addon1"placeholder={this.props.firstName} name="first" required="required" />
                </InputGroup>
                <InputGroup className="mb-3">
               <FormControl  aria-describedby="basic-addon1"placeholder={this.props.lastName} name="last" required="required" />
               </InputGroup>
               
               <InputGroup className="mb-3"><FormControl placeholder={this.props.companyName} aria-describedby="basic-addon1"  name="companyName" required="required" />
               </InputGroup>
               
               <InputGroup className="mb-3"><FormControl placeholder={this.props.title} aria-describedby="basic-addon1" name="title" required="required" />
               </InputGroup>
               <InputGroup className="mb-3"> <FormControl placeholder={this.props.tags} aria-describedby="basic-addon1" name="tags" required="required" />
               </InputGroup>
               <div className="button1">
                 <ButtonToolbar >
                   <Button type="submit" variant="dark">Save</Button>
                  



                 </ButtonToolbar>

               </div>
               {/* <input type="submit"/> */}
             </form>

             <Link to="/Contacts" className="register">Show Less</Link>
             
            


</center>
</div>
        )}
    }
    export default  EditContect;