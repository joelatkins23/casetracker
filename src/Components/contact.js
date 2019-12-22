import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup, ButtonToolbar, Table, Modal, Container, Row, Col } from 'react-bootstrap';
import auth from '../auth'
import './dashboard.css';
import AddContact from './addcontact';
import EditContect from './editcontent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { thisExpression } from '@babel/types';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: [{ 'Employeeid': 'hello' }],
      show: false,
      Salutation: '',
      firstName: '',
      lastName: '',
      companyName: '',
      title: '',
      tags: '',
      id: '',
    }

    this.props.handleChange()

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    fetch('/displayuser')
      .then(response => response.json())
      .then(resData => {
        var newArray = resData.slice();
        this.setState({ hello: resData })
        console.log(JSON.stringify(resData))


      })

  }
  handleClose() {
    fetch('/displayuser')
      .then(response => response.json())
      .then(resData => {
        var newArray = resData.slice();
        this.setState({ hello: resData, show: false });
        console.log(JSON.stringify(resData[1]))


      })


  }
  handleClose() {
    this.setState({ show: false })
  }
  handleOpen(a, b, c, d, e, f, g) {
    this.setState({
      show: true,
      Salutation: a,
      firstName: b,
      lastName: c,
      companyName: d,
      title: e,
      tags: f,
      id: g,
    });
    console.log(g)
  }
  render() {
    const trelement = this.state.hello[0].Employeeid == 'hello'? (<h1></h1>) : (
        this.state.hello.map(quotes => {
          console.log(quotes)
          return (
            <tr onClick={() => {
              this.handleOpen(quotes.Salutation, quotes.firstName, quotes.lastName, quotes.companyName, quotes.title, quotes.tags, quotes._id)}}>

              <td>{quotes.Salutation}</td>

              <td>{quotes.firstName}</td>

              <td>{quotes.lastName}</td>

              <td>{quotes.companyName}</td>

              <td>{quotes.title}</td>

              <td>{quotes.tags}</td>

            </tr>)
        })
      )
    return (
      <Router>
        <div>
          <Container>
            <center className="mt-3">
              <Row>
                <Col>
                  <h1 className="con-title">Contact List</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/Contacts/add" className="add-btn">Add More</Link>
                </Col>
              </Row>

              <Switch>
                <Route path="/Contacts/add">
                  <AddContact />

                </Route>
                <Route path="/Contacts/edit">
                  <EditContect

                    Salutation={this.state.Salutation}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    companyName={this.state.companyName}
                    title={this.state.title}
                    tags={this.state.tags}
                    id={this.state.id}
                  />

                </Route>
              </Switch>


              <div>


                <Table responsive striped bordered hover className="mt-2">
                  <thead>
                    <tr>

                      <th>Salutation</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>companyName</th>
                      <th>Title</th>
                      <th>tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trelement}


                  </tbody>
                </Table>



              </div>
            </center>
          </Container>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>What you want</Modal.Title>
            </Modal.Header>
            <Modal.Body>Select one of these!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => {
                fetch('/deleteContact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                  body: JSON.stringify({
                    id: this.state.id,
                  })
                });


                this.handleClose()
              }}>
                Delete
          </Button>
              <Button variant="primary" onClick={this.handleClose}>
                <Link to="/Contacts/edit" className="register">Edit</Link>
              </Button>

              <Button variant="warning" onClick={this.handleClose}>
                Close
          </Button>

            </Modal.Footer>
          </Modal>
        </div>
      </Router>
    )
  }
}
export default Contact;