import React, { Component } from 'react'
// If your component does not keep track of internal state (i.e., all it really has is just a render() method), you can declare the component as a Stateless Functional Component.
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
						<button className='contact-remove'>
							Remove
						</button>
					</li>
				)
			)
		}
	</ol>
	)
}

export default ListContacts