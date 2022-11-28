import React, { Component } from 'react';



import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';


import { nanoid } from 'nanoid'
// model.id = nanoid() 


export class App extends Component {
  state = {
   contacts: [],
  name: ''
  };
 
 nameId = nanoid()

  handleInputChange = e => {
    
    this.setState({ name: e.currentTarget.value});
} 
  render() {
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
     <h1>Phonebook</h1>
        <form> <label htmlFor="">
      Name <input type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange} /></label>
      </form>
       <button type="submit" disabled={!this.state.name}>
          Add contact
        </button>
        {/* Input  + кнопка*/}
    
      
         {/* список контактів */}
    
    </ThemeProvider> </>

        
    );
  }
} 

