import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem/index';
import { List } from './Contacts.styled';

export function Contacts({ filteredContacts, onContactDelete }) {
  return (
    <>
      <List>
        <ContactsItem
          filteredContacts={filteredContacts}
          onContactDelete={onContactDelete}
        />
      </List>
    </>
  );
}

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onContactDelete: PropTypes.func.isRequired,
};
