import propTypes from 'prop-types';
import { Delete } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContacts }) => (
  
    <ul>
      {contacts.map((contact, id) => (
        <li key={id} >
          {contact.name}: {contact.number}
          <Delete
            type="button"
            onClick={() => deleteContacts(contact.id)} >
            Delete
          </Delete>
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