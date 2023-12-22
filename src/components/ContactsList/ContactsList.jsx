import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsListStyled, Warning } from './ContactsList.styled';
import { getContacts, getFilter, getItems } from '../../redux/phonebookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../../redux/operations';

export const ContactsList = () => {
  const items = useSelector(getItems);
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const getFilteredData = () => {
    return items.filter(el =>
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
