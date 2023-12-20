import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Section } from '../SectionStyled/Section.styled';
import { Subtitle, Title } from './App.styled';
import { ContactsListWrap } from 'components/ContactsList/ContactsList.styled';

export const App = () => {
  return (
    <Section>
      <Title>Phonebook</Title>
      <Form />
      <ContactsListWrap>
        <Subtitle>Contacts</Subtitle>
        <Filter />
        <ContactsList />
      </ContactsListWrap>
    </Section>
  );
};
