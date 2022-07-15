import { nanoid } from 'nanoid';
import { Container } from './components/Container/index';
import { PhonebookForm } from './components/PhonebookForm/index';
import { Contacts } from 'components/Contacts/index';
import { Filter } from './components/Filter/index';
import { useState } from 'react';
import localContacts from './data/localContacts.json';
import { useLocalStorage } from './hooks/useLocalStorage';
import { LOCAL_STORAGE_KEY } from './KEY/localStorageKey';

export function App() {
  const [contacts, setContacts] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    localContacts
  );
  const [filter, setFilter] = useState('');
  console.log(contacts);

  const contactHandler = data => {
    const findContact = contacts.find(contact => contact.name === data.name);
    console.log(data);
    if (findContact) {
      alert(`${data.name} is already in contact`);
    } else {
      const contact = {
        id: nanoid(),
        ...data,
      };
      setContacts(prev => [contact, ...prev]);
    }
  };

  const handleSearchChange = event => {
    setFilter(event.target.value);
  };

  const onFilteredContacts = value => {
    const filterNormalize = value.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormalize);
    });
  };

  const onContactDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm onSubmit={contactHandler} title="Phonebook" />
      <Filter
        value={filter}
        title="Find contacts by name:"
        onChange={handleSearchChange}
      />
      <h2>Contacts</h2>
      <Contacts
        title="Contacts"
        filteredContacts={onFilteredContacts(filter)}
        onContactDelete={onContactDelete}
      />
    </Container>
  );
}
