import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  return (
    <div>
      <h1>PHONEBOOK</h1>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
