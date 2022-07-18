import PropTypes from 'prop-types';
import { FcPhoneAndroid } from 'react-icons/fc';
import {
  ListItem,
  ItemName,
  ItemNumber,
  DeleteButton,
} from './ContactsItem.styled';

export function ContactsItem({ filteredContacts, onContactDelete }) {
  return filteredContacts.map(({ id, name, number }) => (
    <ListItem key={id}>
      <ItemName>
        <FcPhoneAndroid size="20" />
        {name}:
      </ItemName>
      <ItemNumber>{number}</ItemNumber>
      <DeleteButton
        id={id}
        onClick={() => {
          onContactDelete(id);
        }}
      >
        Delete
      </DeleteButton>
    </ListItem>
  ));
}

ContactsItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onContactDelete: PropTypes.func.isRequired,
};
