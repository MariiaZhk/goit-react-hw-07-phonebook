import {
  ContactItem,
  ContactText,
  DeleteItemButton,
} from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/operations';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactText>{name}: </ContactText>
      <ContactText>{number}</ContactText>
      <DeleteItemButton
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </DeleteItemButton>
    </ContactItem>
  );
};
