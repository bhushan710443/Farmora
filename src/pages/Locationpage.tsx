import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddressForm from "../components/forms/AddressForm";
// @ts-expect-error CSS side-effect imports are resolved by the app bundler.
import "./Locationpage.css";


function Locationpage() {

  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullAddress: "",
    city: "",
    pincode: "",
  });

  const handleSave = () => {

    if (
      !address.fullAddress.trim() ||
      !address.city.trim() ||
      address.pincode.length !== 6
    ) {
      alert("Please enter all address details correctly");
      return;
    }

    localStorage.setItem(
      "farmora_address",
      JSON.stringify(address)
    );

    navigate("/home");
  };

  return (
    <div className="address-page">

      <h2>Select Delivery Address</h2>

      <p>Add your delivery location for Farmora orders.</p>

      <AddressForm
        address={address}
        setAddress={setAddress}
        onSave={handleSave}
        onBack={() => navigate(-1)}
      />

    </div>
  );
}

export default Locationpage;