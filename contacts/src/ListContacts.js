import React from 'react';
import PropTypes from 'prop-types';

// If your component does not keep track of internal state (i.e., all it really has is just a render() method),
//you can declare the component as a Stateless Functional Component.
//The component is able to change its own internal state using this.setState().
// Each time state is changed, React knows and will call render() to re-render the component. This allows for fast, efficient updates to your app's UI.

function ListContacts(props){
  return (
	<ol className='contact-list'>
		{props.contacts.map(
			(contact) => (
					<li key={contact.id} className='contact-list-item'>
						<div className='contact-avatar' style={{
							backgroundImage: `url(${contact.avatarURL})`
						}} />

						<div className='contact-details'>
							<p>{contact.name}</p>
							<p>{contact.email}</p>
						</div>
						<button className='contact-remove' onClick={() => props.onDeleteContact(contact)}>
							Remove
						</button>
					</li>
				)
			)
		}
	</ol>
	)
}
ListContacts.propTypes = {
	 onDeleteContact: PropTypes.func.isRequired,
     contacts: PropTypes.array.isRequired
};
export default ListContacts