import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './components/Container/index';
import { PhonebookForm } from './components/PhonebookForm/index';
import { Contacts } from 'components/Contacts/index';
import { Filter } from './components/Filter/index';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  contactHandler = data => {
    const { contacts } = this.state;
    const findContact = contacts.find(contact => contact.name === data.name);
    if (findContact) {
      alert(`${data.name} is already in contact`);
    } else {
      const contact = {
        id: nanoid(),
        ...data,
      };
      this.setState({
        contacts: [...contacts, contact],
      });
    }
  };

  handleSearchChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFilteredContacts = value => {
    const filterNormalize = value.toLowerCase();
    if (this.state.contacts) {
      return this.state.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      });
    }
  };

  onContactDelete = id => {
    const { contacts } = this.state;
    if (contacts) {
      const contactToDelete = contacts.filter(contact => {
        return contact.id !== id;
      });
      this.setState({
        contacts: contactToDelete,
      });
    }
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.contactHandler} title="Phonebook" />
        <Filter
          value={filter}
          title="Find contacts by name:"
          onChange={this.handleSearchChange}
        />
        <h2>Contacts</h2>
        <Contacts
          title="Contacts"
          filteredContacts={this.onFilteredContacts(filter)}
          onContactDelete={this.onContactDelete.bind(this)}
        />
      </Container>
    );
  }
}
