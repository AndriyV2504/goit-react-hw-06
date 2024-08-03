import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filterContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </div>
  );
};

export default ContactList;
