import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsListStyled, Warning } from './ContactsList.styled';
import { contactsValue, filterValue } from '../../redux/phonebookSlice';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(contactsValue);
  const filter = useSelector(filterValue);

  const getFilteredData = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {getFilteredData().length === 0 ? (
        <Warning>There aren't contacts that match your search query...</Warning>
      ) : (
        <ContactsListStyled>
          {getFilteredData().map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
        </ContactsListStyled>
      )}
    </>
  );
};
