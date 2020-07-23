import React, { Component } from 'react';

class AddContact extends Component {

    constructor(props) {
        super(props)

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }


    onChangeHandler = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmitHandler = (e) => {
        e.preventDefault();

        const newContact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }

        console.log(newContact)
    }

    static defaultProps = {
        name: 'James Bond',
        email: 'james@gmail.com',
        phone: '111-222-3333'
    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text"
                                name="name"
                                placeholder="Enter Name..."
                                className="form-control"
                                defaultValue={name}
                                ref={this.nameInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email:</label>
                            <input type="email"
                                name="email"
                                placeholder="Enter Email..."
                                className="form-control"
                                defaultValue={email} ref={this.emailInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone:</label>
                            <input type="text"
                                name="phone"
                                placeholder="Enter Phone..."
                                className="form-control"
                                defaultValue={phone} ref={this.phoneInput} />
                        </div>
                        <input type="submit" className="btn btn-primary btn-block" value="Add Contact" />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;
