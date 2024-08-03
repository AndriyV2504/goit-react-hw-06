import { createReducer } from "@reduxjs/toolkit";
import { addContact, changeFilter, deleteContact } from "./actions";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filters: {
    name: "",
  },
};

const contactsReducer = createReducer(initialState.contacts, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    });
});

const filtersReducer = createReducer(initialState.filters, (builder) => {
  builder.addCase(changeFilter, (state, action) => {
    state.name = action.payload;
  });
});

const rootReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     case deleteContact.type:
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter(
//             (contact) => contact.id !== action.payload
//           ),
//         },
//       };
//     case changeFilter.type:
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           name: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

export default rootReducer;
