import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }

        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }

        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@gmail.com',
                phone: '223-456-7321'
            },
            {
                id: 2,
                name: 'James Williams',
                email: 'james@gmail.com',
                phone: '344-000-3333'
            },
            {
                id: 3,
                name: 'Mark Doe',
                email: 'mark@gmail.com',
                phone: '445-111-2222'
            }
        ],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;