
import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

class Customerlist extends React.Component {
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
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
};


Customerlist.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default Customerlist;



