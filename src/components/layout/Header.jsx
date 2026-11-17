import farmoraLogo from "../../assets/FARMORA_Logo.png";
import { useNavigate } from "react-router-dom";


import { ShoppingCart, MapPin, UserRound, ArrowRight } from "lucide-react";

import SearchBar from "../common/SearchBar";
import "./Header.css";

function Header({
  searchValue,
  onSearchChange,
  onSearch
}) {

  const navigate = useNavigate();


  return (
    <header className="farmora-header">


      <div className="header-container">

        {/* Farmora Logo */}
        <button
          type="button"
          className="header-logo"
          onClick={() => navigate("/home")}
          aria-label="Go to Farmora Home"
        >
          <img
            src={farmoraLogo}
            alt="Farmora Logo"
            className="logo-image"
          />
        </button>


        {/* Delivery Location */}
        <div>
          <button
            type="button"
            className="address-btn"
            onClick={() => navigate("/location")}>
            <MapPin size={20} />
            <span>Add Address</span>
            <ArrowRight size={17} />
          </button>
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

          <button
            type="button"
            className="header-action"
            onClick={() => navigate("/login")}
          >
            <UserRound size={22} />
            <span>Login</span>
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;
