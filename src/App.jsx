import { nanoid } from 'nanoid';
import { Container } from './components/Container/index';
import { PhonebookForm } from './components/PhonebookForm/index';
import { Contacts } from 'components/Contacts/index';
import { Filter } from './components/Filter/index';
import { useState, useEffect } from 'react';

export function App() {
  const [filter, setFilter] = useState('');

  function componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  function componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  const contactHandler = data => {
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

  const handleSearchChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  const onFilteredContacts = value => {
    const filterNormalize = value.toLowerCase();
    if (this.state.contacts) {
      return this.state.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      });
    }
  };

  const onContactDelete = id => {
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
