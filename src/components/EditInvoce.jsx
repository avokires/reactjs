
import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class EditInvoce extends React.Component {
    
    constructor(props) {
        super(props);

        // this.state = {

        // };
    }

    render() {
        return (
            <div className="container">
                <h1 className="inl-bl">Edit Invoce</h1>

                <Form>

                    <Row className="show-grid">
                        <Col sm={6} md={3}>
                            <FormGroup controlId="formDiscount">
                                <ControlLabel>Discount (%)</ControlLabel>
                                <FormControl type="text" value="1" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col sm={12} md={6}>
                            <FormGroup controlId="formCustomerSelect">
                                <ControlLabel>Customer</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="1">Mark Benson</option>
                                    <option value="2">Pet Rock</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col sm={6} md={5}>
                            <FormGroup controlId="formProductSelect">
                                <ControlLabel>Add product</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="1">1 product</option>
                                    <option value="2">2 product</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col sm={6} md={7}>
                            <Button className="btn-add">Add</Button>
                        </Col>
                    </Row>



                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pet Rock</td>
                                <td>5.99</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>

                </Form>

            </div>
        );
    }
};


// EditInvoce.propTypes = {
//     title: React.PropTypes.string.isRequired
// };

export default EditInvoce;



