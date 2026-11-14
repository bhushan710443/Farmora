
import {
  Sprout,
  ShoppingCart,
  MapPin,
  UserRound
} from "lucide-react";

import SearchBar from "../common/SearchBar";
import "./Header.css";

function Header({
  searchValue,
  onSearchChange,
  onSearch
}) {

  return (
    <header className="farmora-header">

      <div className="header-container">

        {/* Farmora Logo */}
        <div className="header-logo">
          <Sprout size={35} />

          <div>
            <h2>Farmora</h2>
            <span>Grow More. Live Better.</span>
          </div>
        </div>

        {/* Delivery Location */}
        <div className="delivery-location">
          <MapPin size={20} />

          <div>
            <span>Delivering to</span>
            <strong>Pune, Maharashtra</strong>
          </div>
        </div>

        {/* Reusable Search Component */}
        <SearchBar
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onSearch={onSearch}
        />

        {/* Header Actions */}
        <div className="header-actions">

          <button className="header-action">
            <ShoppingCart size={22} />
            <span>Cart</span>
          </button>

          <button className="header-action">
            <UserRound size={22} />
            <span>Login</span>
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;
