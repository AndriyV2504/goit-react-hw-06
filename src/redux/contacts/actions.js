import { ADD_CONTACT, CHANGE_FILTER, DELETE_CONTACT } from "./constants";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
