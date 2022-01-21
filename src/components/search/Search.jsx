import { useGlobalContext } from "../../contex";
import "./search.css";

const Search = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Movie App</h2>
        <input
          type="text"
          placeholder="Type a name Film"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
