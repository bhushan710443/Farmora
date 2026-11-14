import { useState } from "react";
import { MapPin, ChevronDown, X, Navigation } from "lucide-react";

function AddressSelector() {

  const [isOpen, setIsOpen] = useState(false);

  const [address, setAddress] = useState({
    fullAddress: "",
    city: "",
    pincode: ""
  });

  const [savedAddress, setSavedAddress] = useState(null);

  const handleSave = () => {
    if (!address.fullAddress || !address.city || !address.pincode) {
      alert("Please fill all address details");
      return;
    }

    setSavedAddress(address);
    setIsOpen(false);
  };

  return (
    <>
      {/* Delivery Location */}
      <div
        className="delivery-location"
        onClick={() => setIsOpen(true)}
      >
        <MapPin size={22} />

        <div>
          <span>Delivering to</span>

          <strong>
            {savedAddress
              ? `${savedAddress.city} - ${savedAddress.pincode}`
              : "Select your location"}
          </strong>
        </div>

        <ChevronDown size={16} />
      </div>

      {/* Address Modal */}
      {isOpen && (
        <div className="address-overlay">
          <div className="address-modal">

            <div className="address-modal-header">
              <h3>Select Delivery Address</h3>

              <X
                size={22}
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className="address-form">

              <label>Full Address</label>
              <textarea
                placeholder="House no, street, area, landmark..."
                value={address.fullAddress}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    fullAddress: e.target.value
                  })
                }
              />

              <label>City</label>
              <input
                type="text"
                placeholder="Enter city"
                value={address.city}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    city: e.target.value
                  })
                }
              />

              <label>PIN Code</label>
              <input
                type="text"
                maxLength={6}
                placeholder="Enter PIN code"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    pincode: e.target.value.replace(/\D/g, "")
                  })
                }
              />

              <button onClick={handleSave}>
                Save Address
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddressSelector;