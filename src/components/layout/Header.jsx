import farmoraLogo from "../../assets/FARMORA_Logo.png";
import AddressSelector from "../common/AddressSelector";

import {
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
             <img
               src={farmoraLogo}
               alt="Farmora Logo"
              className="logo-image"
            />
        </div>


        {/* Delivery Location */}

        <div>
          <span>Delivering to</span>
          <AddressSelector />
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
