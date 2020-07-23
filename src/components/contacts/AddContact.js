import React, { Component } from 'react';
import { Consumer } from '../../context'
import { v1 as uuid } from "uuid";

class AddContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: ''
        }

        this.form = React.createRef();
    }

    onChangeHandler = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmitHandler = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        if (name && email && phone) {
            dispatch({
                type: 'ADD_CONTACT',
                payload: newContact
            })
        }

        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card">
                            <div className="card-header">
                                Add Contact
                        </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmitHandler.bind(this, dispatch)} ref={this.form}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" name="name" placeholder="Enter Name..." className="form-control" value={name} onChange={this.onChangeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Email:</label>
                                        <input type="email" name="email" placeholder="Enter Email..." className="form-control" value={email} onChange={this.onChangeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Phone:</label>
                                        <input type="text" name="phone" placeholder="Enter Phone..." className="form-control" value={phone} onChange={this.onChangeHandler} />
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block" value="Add Contact" />
                                </form>
                            </div>
                        </div>
                    )


                }}

            </Consumer>
        );
    }
}

export default AddContact;
