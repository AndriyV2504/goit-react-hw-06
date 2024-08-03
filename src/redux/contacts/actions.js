import { createAction } from "@reduxjs/toolkit";
import { ADD_CONTACT, CHANGE_FILTER, DELETE_CONTACT } from "./constants";

export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
export const changeFilter = createAction(CHANGE_FILTER);
