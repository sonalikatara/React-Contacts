import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
/*
	Controlled components refer to components that render a form, but the "source of truth" for that form state lives inside of the component state rather than inside of the DOM.
	The benefits of Controlled Components are:
		instant input validation
		conditionally disable/enable buttons
		enforce input formats
	In our ListContacts component, not only does the component render a form, but it also controls what happens in that form based on user input.
	In this case, event handlers update the component's state with the user's search query.
	And as we've learned: any changes to React state will cause a re-render on the page, effectively displaying our live search results.

*/
class ListContacts extends Component{
	static propTypes = {
		contacts: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired
	}

    state ={
    	query : ''
    }

    updateQuery = (query) => {
    	this.setState({query: query.trim()})
    }

    clearQuery = () => {
    	this.setState({query: ''})
    }

    render(){
    	const {contacts, onDeleteContact} = this.props
    	const { query } = this.state;

    	let showingContacts

    	if(query){
    		const match = new RegExp(escapeRegExp(query), 'i')
    		showingContacts = contacts.filter((contact)=> match.test(contact.name))
    	} else {
    		showingContacts = contacts
    	}

    	showingContacts.sort(sortBy('name'))

       return (
       	<div className='list-contacts'>
       	 <div className='list-contacts-top'>
       	 	<input
   	 		  className='search-contacts'
   	 		  type='text'
   	 		  placeholder='Search Contacts'
   	 		  value={query}
   	 		  onChange={(event)=> this.updateQuery(event.target.value)}
       	 	/>
       	 	<Link
       	 	  to ='#create' className='add-contact'
       	 	  onClick= {this.props.onNavigate}>
       	 	  Add Contact</Link>
       	 </div>



       	 {showingContacts.length !== contacts.length &&
       	 	(
       	 		<div className='showing-contacts'>
       	 			<span>Now showing {showingContacts.length} of {contacts.length} total</span>
       	 			<button onClick={this.clearQuery}>Show all</button>
       	 		</div>
       	 	)
       	 }

		 <ol className='contact-list'>
			{showingContacts.map(
				(contact) => (
						<li key={contact.id} className='contact-list-item'>
							<div className='contact-avatar' style={{
								backgroundImage: `url(${contact.avatarURL})`
							}} />
							<div className='contact-details'>
								<p>{contact.name}</p>
								<p>{contact.email}</p>
							</div>
							<button className='contact-remove' onClick={() => onDeleteContact(contact)}>
								Remove
							</button>
						</li>
					)
				)
			}
		 </ol>
		 </div>
		)
    }

}

export default ListContacts