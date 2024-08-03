import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/contacts/actions";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleSearch} />
    </div>
  );
};

export default SearchBox;
