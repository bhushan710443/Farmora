import { MapPin, ArrowLeft } from "lucide-react";

function AddressForm({
  address,
  setAddress,
  onSave,
  onBack
}) {

  return (
    <div className="address-form">

      <button type="button" onClick={onBack}>
        <ArrowLeft size={18} /> Back
      </button>

      <MapPin size={28} />

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
        placeholder="Enter PIN code"
        maxLength={6}
        inputMode="numeric"
        value={address.pincode}
        onChange={(e) =>
          setAddress({
            ...address,
            pincode: e.target.value.replace(/\D/g, "")
          })
        }
      />

      <button type="button" onClick={onSave}>
        Save Address
      </button>

    </div>
  );
}

export default AddressForm;