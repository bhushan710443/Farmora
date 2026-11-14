
import { useState } from "react";

import Header from "../components/layout/Header";

function Homepage() {

  // Shared search state
  const [searchValue, setSearchValue] = useState("");

  // Called when user submits search
  const handleSearch = (query: string) => {
    console.log("Searching Farmora for:", query);

    // Later we will call Product Search API here
  };

  return (
    <div>

      <Header
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
      />

      <main className="homepage-content">

        <h1>Welcome to Farmora 🌱</h1>

        <p>
          Everything your farm needs, in one place.
        </p>

      </main>

    </div>
  );
}

export default Homepage;
