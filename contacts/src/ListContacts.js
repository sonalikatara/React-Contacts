import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    render(){
       return (
       	<div className='list-contacts'>
       	 {JSON.stringify(this.state)}
       	 <div className='list-contacts-top'>
       	 	<input
   	 		  className='search-contacts'
   	 		  type='text'
   	 		  placeholder='Search Contacts'
   	 		  value={this.state.query}
   	 		  onChange={(event)=> this.updateQuery(event.target.value)}
       	 	/>
       	 </div>
		 <ol className='contact-list'>
			{this.props.contacts.map(
				(contact) => (
						<li key={contact.id} className='contact-list-item'>
							<div className='contact-avatar' style={{
								backgroundImage: `url(${contact.avatarURL})`
							}} />
							<div className='contact-details'>
								<p>{contact.name}</p>
								<p>{contact.email}</p>
							</div>
							<button className='contact-remove' onClick={() => this.props.onDeleteContact(contact)}>
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