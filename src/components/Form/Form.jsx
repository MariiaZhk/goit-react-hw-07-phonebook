import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormStyled, Input, Label } from 'components/Form/Form.styled';
import { createContactAction, contactsValue } from '../../redux/phonebookSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsValue);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { id: nanoid(), name, number };
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact name ${name} already exists!`);
      resetForm();
      return;
    }
    dispatch(createContactAction(newContact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="number"
          id="number"
          value={number}
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};
