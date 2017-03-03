import React from 'react';

function hocModifyItem(WrappedComponent, selectData) {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            
            this.state = {
                modalFields: {},
                showModal: false,
                customers: [
                    {
                        id: 1,
                        name: "Mark Benson",
                        address: "353 Rochester St, Rialto FL 43250",
                        phone: "555-534-2342"
                    },

                    {
                        id: 2,
                        name: "Bob Smith",
                        address: "215 Market St, Dansville CA 94325",
                        phone: "555-534-2342"
                    },

                    {
                        id: 3,
                        name: "John Draper",
                        address: "890 Main St, Fontana IL 31450",
                        phone: "555-534-2342"
                    }
                ]

            };
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}