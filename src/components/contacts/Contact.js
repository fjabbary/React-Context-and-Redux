import React, { Component } from 'react'
import { Consumer } from '../../context';

class Contact extends Component {

    state = {
        showDetails: false
    }

    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    removeContact = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    }

    render() {
        const { id, name, email, phone } = this.props.contact
        const { showDetails } = this.state

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3 card-contact">
                            <div className="card-body">
                                <h2>{name}<i className={showDetails ? "fa fa-minus ml-3" : "fa fa-plus ml-3"} onClick={this.toggleDetails}></i> <i className="fa fa-trash float-right" onClick={this.removeContact.bind(this, id, dispatch)}></i></h2>

                                {showDetails ? <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul> : null}
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )


    }
}


export default Contact;