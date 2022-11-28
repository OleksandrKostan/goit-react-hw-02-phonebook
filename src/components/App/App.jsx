import React, { Component } from 'react';
import { Section } from '../Section/Section'


import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';


// import { nanoid } from 'nanoid'
// model.id = nanoid() 


export class App extends Component {
  state = {
   contacts: [],
  name: ''
  };
 


  render() {
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
     <Section title="Phonebook">
        {/* Input  + кнопка*/}
      </Section>
        {/* <Section title="Contacts"> 
         {/* список контактів */}
      {/* </Section> */} */
    </ThemeProvider> </>

        
    );
  }
} 

