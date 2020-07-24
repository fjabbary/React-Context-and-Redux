import React from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/layout/About';
import My404Component from './components/layout/My404Component'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context'
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route path="/" component={Contacts} exact />
              <Route path="/about" component={About} exact />
              <Route path="/contact/add" component={AddContact} />
              <Route path="/contact/edit/:id" component={EditContact} />
              <Route path='*' exact={true} component={My404Component} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
