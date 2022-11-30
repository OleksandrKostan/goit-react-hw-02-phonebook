import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [],    
  };



 addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
   console.log(name, number)
  };

  render() {
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
      <h2>Phonebook</h2>
      <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
   <ContactList contacts={this.state.contacts}/>

    </ThemeProvider> </>
    );
  }
}

