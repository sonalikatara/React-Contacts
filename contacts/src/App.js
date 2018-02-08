import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

// Move default contacts into App component as state
// props refer to attributes from parent components. In the end, props represent "read-only" data that are immutable.
//A component's state, on the other hand, represents mutable data that ultimately affects what is rendered on the page.
//State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).

//componentDidMount() is one of a number of lifecycle events that React offers. componentDidMount() gets called after the component is "mounted" (which means after it is rendered). If you need to dynamically fetch data or run an Ajax request, you should do it in componentDidMount().

//the Route component is a critical piece of building an application with React Router because it's the component which is going to decide which components are rendered based on the current URL path.
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

      ContactsAPI.remove(contact)
  }

  addContact = () =>{

  }

 render(){
  return (
    <div>
    <Route exact path='/' render={() => (
      <ListContacts
        onDeleteContact={this.removeContact}
        contacts={this.state.contacts}/>
      )} />
   <Route path='/create' component={CreateContact} />
    </div>
    )
  }
}
export default App;
