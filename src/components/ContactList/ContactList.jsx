export const ContactList = ({contacts, deleteContacts}) => (
  
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