import propTypes from 'prop-types';
import {
  StyledContactsList,
  StyledContactsItem,
  StyledDeleteButton,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, handleDelete }) => (
  <div>
    <StyledContactsList>
      {contacts.map((contact, id) => (
        <StyledContactsItem key={id}>
          {contact.name}: {contact.number}
          <StyledDeleteButton
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </StyledDeleteButton>
        </StyledContactsItem>
      ))}
    </StyledContactsList>
  </div>
);

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
