import React, { Component } from 'react';
import ListContacts from './ListContacts';

// Move default contacts into App component as state
// props refer to attributes from parent components. In the end, props represent "read-only" data that are immutable.
//A component's state, on the other hand, represents mutable data that ultimately affects what is rendered on the page.
//State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).


class App extends Component{
  state = {
  contacts : [
    {
      "id": "ryan",
      "name": "Ryan Florence",
      "email": "ryan@reacttraining.com",
      "avatarURL": "http://localhost:5001/ryan.jpg"
    },
    {
      "id": "michael",
      "name": "Michael Jackson",
      "email": "michael@reacttraining.com",
      "avatarURL": "http://localhost:5001/michael.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "email": "tyler@reacttraining.com",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
  ]
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
