import propTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContacts }) => (
  
    <ul>
      {contacts.map((contact, id) => (
        <li key={id} >
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => deleteContacts(contact.id)} >
            Delete
          </button>
        </li>
      ))}
    </ul>
 
);


ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  deleteContacts: propTypes.func.isRequired,
};