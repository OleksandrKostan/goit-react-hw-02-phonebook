import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  nameId = nanoid();
  numberId = nanoid();
    
  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value
    });
  };
    
     handleSubmit = e => {
     e.preventDefault();
       this.props.onSubmit(this.state);
  }
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
    render() { 
        return (<form onSubmit={this.handleSubmit}> <label htmlFor={this.nameId}>
        Name <input type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange} /></label>
        <label htmlFor={this.numberId}>
        Number <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
/>
        </label>
        <button  type="submit" disabled={!this.state.name || !this.state.number} >
        Add contact
      </button>
      </form>);
    }
}
 
