import {
  ContactItem,
  ContactText,
  DeleteItemButton,
} from './ContactsItem.styled';
import { deleteContactAction } from '../../redux/phonebookSlice';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactText>{name}: </ContactText>
      <ContactText>{number}</ContactText>
      <DeleteItemButton
        type="button"
        onClick={() => dispatch(deleteContactAction(id))}
      >
        Delete
      </DeleteItemButton>
    </ContactItem>
  );
};
