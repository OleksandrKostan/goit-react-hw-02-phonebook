import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},], 
    filter: ''
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
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
      <h2>Phonebook</h2>
      <ContactForm onSubmit={this.addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.addContact}/>
   <ContactList contacts={this.state.contacts}/>

    </ThemeProvider> </>
    );
  }
}

