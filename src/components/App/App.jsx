import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm';


export class App extends Component {
  state = {
    contacts: [],    
  };

  formSubmit = data => {
    console.log(data)
  }

  render() {
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
      <h2>Phonebook</h2>
      <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
      {/* список контактів */}

    </ThemeProvider> </>
    );
  }
}

