
import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

import Modal from 'react-bootstrap/lib/Modal';

import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class ProductList extends React.Component {
    constructor(props) {
        
        super(props);

        this.state = {
            modalFields: {},
            showModal: false,
            products: [
                {
                    id: 1,
                    name: "Parachete Pants",
                    price: "22.99"
                },

                {
                    id: 2,
                    name: "Phone Holder",
                    price: "9.99"
                },

                {
                    id: 3,
                    name: "John Draper",
                    price: "9.99"
                }
            ]
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.save = this.save.bind(this);

    }

    open(event, product, action){
        this.setState({
            chosenProduct: product.id ? product : '', 
            showModal: true,
            titleModal: event.target.title,
            modalFields: product,
            dataAction: action
        });
    }

    close(){
        this.setState({
            showModal: false
        })
    }

    // cansel(event, product){
    //     console.log(product);
    //     // this.setState({
    //     //     showModal: false
    //     // })
    // }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        let modalFields = Object.assign({}, this.state.modalFields);

        modalFields[name] = value;

        this.setState({
            modalFields: modalFields
        });
    }

    add(event){
        let products = this.state.products;
        let newProductID = products.length + 1;
        let modalFields = this.state.modalFields;
        
        modalFields['id'] = newProductID;

        this.setState({
            modalFields: modalFields,
            products: this.state.products.concat([this.state.modalFields]),
            showModal: false
        });
    }

    delete(event, product){
        let products = this.state.products;
        let newProducts = {}

        newProducts = products.filter((p) => p.id !== product.id); 

        this.setState({
            products: newProducts,
            showModal: false
        })
    }

    save(event){
        let products = this.state.products;

        products.forEach((product, i) => {
           if (product.id ===  this.state.modalFields.id){
               this.state.products[i] = this.state.modalFields;
           }
        });

        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="inl-bl">Product List</h1>
                <Button className="inl-bl" title="Add new product" onClick={this.open}>Create</Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.titleModal}</Modal.Title>
                    </Modal.Header>
                    
                    { this.state.chosenProduct ? 
                        
                        this.state.dataAction === 'delete' ?

                        <Modal.Body>
                                <p>Are you shure delete product?</p>

                                <FormGroup>
                                    <Button onClick={(event) => this.delete(event, this.state.chosenProduct)}>Yes</Button>&nbsp;
                                    <Button onClick={this.close}>No</Button>
                                </FormGroup>

                        </Modal.Body>

                        : 

                        <Modal.Body>
                            <Form>
                                <FormGroup>
                                    <ControlLabel>Name product</ControlLabel>
                                    <FormControl onChange={this.handleChange} type="text" name="name" defaultValue={this.state.chosenProduct.name}></FormControl>
                                </FormGroup>
                                
                                <FormGroup>
                                    <ControlLabel>Price product</ControlLabel>
                                    <FormControl onChange={this.handleChange} type="text" name="price" defaultValue={this.state.chosenProduct.price}></FormControl>
                                </FormGroup>

                                <FormGroup>
                                    <Button onClick={this.save}>Save</Button>
                                </FormGroup>
                            </Form>
                        </Modal.Body>

                    :


                    <Modal.Body>
                        <Form>
                            <FormGroup>
                                <ControlLabel>Name product</ControlLabel>
                                <FormControl onChange={this.handleChange} type="text" name="name"></FormControl>
                            </FormGroup>
                             
                            <FormGroup>
                                <ControlLabel>Price product</ControlLabel>
                                <FormControl onChange={this.handleChange} type="text" name="price"></FormControl>
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
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                product =>
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><a title="Edit product" href="#" onClick={(event) => this.open(event, product,"edit")}>edit</a></td>
                                    <td><a title="Delete product" href="#" onClick={(event) => this.open(event, product,"delete")}>delete</a></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
};


// ProductList.propTypes = {
//     title: React.PropTypes.string.isRequired
// };

export default ProductList;



