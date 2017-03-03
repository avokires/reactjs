
import React from 'react';
import ReactDOM from 'react-dom';
import Title, { flushTitle } from 'react-title-component';

import axios from 'axios';

import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import Modal from 'react-bootstrap/lib/Modal';

import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Header from './Header';

class Customerlist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalFields: {},
            showModal: false,
            customers: []

        };
        
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);

    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/api/customers')
        .then(response => response.data)
        .then(customers => this.setState({ customers }))
        .catch(error => console.error(error));
    }


    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        let modalFields = Object.assign({}, this.state.modalFields);
        modalFields[name] = value;

        this.setState({
            modalFields: modalFields 
        });
    }

    close(event) {
        this.setState({
            showModal: false
        });
    }

    open(event, customer, action) {
        this.setState({
            chosenCustomer: customer.id ? customer : '',
            showModal: true,
            titleModal: event.target.title,
            dataAction: action,
            modalFields: customer
        });
    }

    save(event) {
        let customers = this.state.customers;
        let modalFields = Object.assign({}, this.state.modalFields);
        
        axios.put( `http://localhost:8000/api/customers/${modalFields.id}`, modalFields )
        .then(response => response.data)
        .then(customer => 
            {
                customers.forEach((itemCustomer, i) => {
                    if (itemCustomer.id  ===  customer.id){
                        customers[i] = customer;
                    }
                });

                this.setState({
                    customers: customers,
                    showModal:false,
                });
            }
        )
        .catch(error => console.error(error));
    }

    add(event) {
        let customers = this.state.customers;
        let modalFields = this.state.modalFields;

        axios.post( 'http://localhost:8000/api/customers', modalFields )
        .then(response => response.data)
        .then(customer => 
            {
                modalFields['id'] = customer.id;
                const customers = [...this.state.customers, modalFields]

                this.setState({
                    customers: customers,
                    showModal:false
                });
            }
        )
        .catch(error => console.error(error));
    }   

    delete(event, customer) {

        let customers = this.state.customers;
        let modalFields = this.state.modalFields;
        
        axios.delete( `http://localhost:8000/api/customers/${modalFields.id}`, modalFields )
        .then(response => response.data)
        .then(customer => 
            {
                customers[customer.id] = customer 

                this.setState({
                    customers: this.state.customers.filter((c) => c.id !== customer.id),
                    showModal:false
                });
            }
        )
        .catch(error => console.error(error));
    }

    render() {
        return (    
            <div className="container">
                <Title render="Customers list"/>
                <h1 className="inl-bl">Customers list</h1>
                <Button className="inl-bl" title="Add new customer" onClick={this.open}>Create</Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.titleModal}</Modal.Title>
                    </Modal.Header>

                    { this.state.chosenCustomer ?
                        <Modal.Body>
                            { this.state.dataAction === 'delete' ? 
                                <div>
                                    <p>Are you sure you want to delete the item?</p>
                                    <Button onClick={(event) => this.delete(event, this.state.chosenCustomer)}>Yes</Button>&nbsp;
                                    <Button onClick={this.close}>No</Button>
                                </div>
                            :
                                <Form>
                                    <FormGroup controlId="customerName">
                                        <ControlLabel>Name</ControlLabel>
                                        <FormControl type="text" name="name" onChange={this.handleChange} defaultValue={this.state.chosenCustomer.name} />
                                    </FormGroup>

                                    <FormGroup controlId="addressName">
                                        <ControlLabel>Address</ControlLabel>
                                        <FormControl type="text" name="address" onChange={this.handleChange} defaultValue={this.state.chosenCustomer.address} />
                                    </FormGroup>

                                    <FormGroup controlId="phoneName">
                                        <ControlLabel>Phone</ControlLabel>
                                        <FormControl type="text" name="phone" onChange={this.handleChange} defaultValue={this.state.chosenCustomer.phone} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Button onClick={this.save}>Save</Button>
                                    </FormGroup>
                                </Form>                      
                             }
      
                        </Modal.Body>

                        :

                        <Modal.Body>
                            <Form>
                            <FormGroup controlId="customerName">
                                    <ControlLabel>Name</ControlLabel>
                                    <FormControl type="text" name="name" onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup controlId="addressName">
                                    <ControlLabel>Address</ControlLabel>
                                    <FormControl type="text" name="address" onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup controlId="phoneName">
                                    <ControlLabel>Phone</ControlLabel>
                                    <FormControl type="text" name="phone" onChange={this.handleChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <Button onClick={this.add}>Add</Button>
                                </FormGroup>
                            </Form>
                        </Modal.Body>
                    }

                </Modal>

                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.customers.map(
                                customer =>
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.phone}</td>
                                    <td><a title="Edit customer" data="edit" onClick={(event) => this.open(event, customer, 'edit')} href="#">edit</a></td>
                                    <td><a title="Delete customer" data="delete" onClick={(event) => this.open(event, customer, 'delete')} href="#">del</a></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
};


Customerlist.propTypes = {
    customer: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        phone: React.PropTypes.string
    })),
    dataId: React.PropTypes.number,
    dataAction: React.PropTypes.string,
};

export default Customerlist;
