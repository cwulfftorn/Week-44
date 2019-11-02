import React, { useState } from "react";

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? !target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = event => {
    window.alert(JSON.stringify(reservation));
    setReservation(initialValue);
  };

  return (
    <div>
      <form onChange={handleChange}>
        <label>
          Pay by Credit Card:
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
          />
        </label>
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          placeholder="First Name"
        />
        <br />
        <input
          name="lastName"
          value={reservation.lastName}
          placeholder="Last Name"
        />
        <br />
        <input name="email" value={reservation.email} placeholder="email" />
        <br />
        <input name="phone" value={reservation.phone} placeholder="phone" />
        <br />
        <input name="street" value={reservation.street} placeholder="street" />
        <br />
        <input name="city" value={reservation.city} placeholder="city" />
        <br />
        <input name="zip" value={reservation.zip} placeholder="zip" />
        <br />
        <input
          name="country"
          value={reservation.country}
          placeholder="country"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
  
}
export default ReservationForm;
