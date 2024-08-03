import { initialContacts } from "../Contact.json";
import { ADD_CONTACT, CHANGE_FILTER, DELETE_CONTACT } from "./constants";

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
