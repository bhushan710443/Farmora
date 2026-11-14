
import { Search, X } from "lucide-react";
import "./SearchBar.css";

function SearchBar({ searchValue, onSearchChange, onSearch }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchValue.trim()) return;

    onSearch(searchValue.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>

      <Search size={20} className="search-icon" />

      <input
        type="text"
        placeholder="Search seeds, fertilizers, pesticides..."
        value={searchValue}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
      />

      {searchValue && (
        <button
          type="button"
          className="clear-search"
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}

      <button type="submit" className="search-submit">
        Search
      </button>

    </form>
  );
}

export default SearchBar;
