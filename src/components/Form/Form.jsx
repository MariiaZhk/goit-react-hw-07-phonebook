import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { Button, FormStyled, Input, Label } from 'components/Form/Form.styled';
import { getItems } from '../../redux/phonebookSlice';
// import { createContactAction } from '../../redux/phonebookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/operations';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(getItems);

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangePhone = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, phone: number };
    if (items.some(item => item.name === name)) {
      alert(`Contact name ${name} already exists!`);
      resetForm();
      return;
    }
    dispatch(addContactThunk(newContact));
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
          onChange={handleChangeName}
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
          onChange={handleChangePhone}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};
