import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: contactsInitialState,
  reducers: {
    createContactAction: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactsValue = state => state.phonebook.contacts;
export const filterValue = state => state.phonebook.filter;

export const { createContactAction, deleteContactAction, setFilterAction } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
