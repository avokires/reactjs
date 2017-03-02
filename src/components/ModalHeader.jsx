import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

class ModalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>

        );
    }
};

// Header.propTypes = {
//     onStatusChange: React.PropTypes.func.isRequired
// };

export default ModalHeader;  