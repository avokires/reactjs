
import React from 'react';
import Title, { flushTitle } from 'react-title-component';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

class InvoceList extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
            
        // };
    }
    render() {
        return (
            <div className="container">
                <Title render="Invoces list"/>
                <h1 className="inl-bl">Invoces List</h1>
                <Button className="inl-bl">Create</Button>

                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Discount</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="#">edit</a></td>
                    </tr>
                    <tr>
                       <td>1</td>
                        <td>Mark Benson</td>
                        <td>1</td>
                        <td></td>
                        <td><a href="#">edit</a></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
};


// InvoceList.propTypes = {
//     title: React.PropTypes.string.isRequired
// };

export default InvoceList;



