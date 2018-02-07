import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'

// Move default contacts into App component as state
// props refer to attributes from parent components. In the end, props represent "read-only" data that are immutable.
//A component's state, on the other hand, represents mutable data that ultimately affects what is rendered on the page.
//State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).


class App extends Component{
  state = {
  contacts : []
  }

  componentDidMount(){
     ContactsAPI.getAll().then((contacts) => {
        this.setState({ contacts })
    })
  }

  removeContact = (contact) =>{
      this.setState((state) => ({
        contacts: state.contacts.filter((c)=> c.id !== contact.id)
      }))
  }
 render(){
  return (
    <div>
      <ListContacts
        onDeleteContact={this.removeContact}
        contacts={this.state.contacts} />

    </div>
    )
  }
}

export default App;
