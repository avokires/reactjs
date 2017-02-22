
import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
            
        // };
    }
    render() {
        return (
            <div className="container">
                <h1 className="inl-bl">{this.props.title}</h1>
                <Button className="inl-bl">Create</Button>

                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Parachete Pants</td>
                        <td>22.99</td>
                    </tr>
                    <tr>
                       <td>2</td>
                        <td>Phone Holder</td>
                        <td>9.99</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
};


ProductList.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default ProductList;



