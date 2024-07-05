import React, { useState } from "react";
import Input from "./Form/Input";

const Address = () => {
  const [address, setAddress] = useState({
    name: "",
    mobileNumber: "",
    Pincode: "",
    House: "",
    Village: "",
    Landmark: "",
    Town: "",
    State: "",
    Country: "",
  });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddress({ ...address, [name]: value });
  };
  return (
    <section className="min-h-screen py-32 px-12">
      <h2 className="text-white text-3xl text-center mb-6 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-200">
        Add a new Address
      </h2>
      <form className="flex flex-col max-w-[600px] mx-auto justify-center items-center gap-6">
        <Input
          name="name"
          type="text"
          value={address.name}
          placeholder="Name"
          onChange={onChange}
        />
        <div className="flex max-md:flex-col w-full gap-4">
          <Input
            name="mobileNumber"
            type="text"
            value={address.mobileNumber}
            placeholder="Mobile Number (To assist delivery)"
            onChange={onChange}
          />
          <Input
            name="Pincode"
            type="text"
            value={address.Pincode}
            placeholder="Pincode [6 digit]"
            onChange={onChange}
          />
        </div>
        <Input
          name="House"
          type="text"
          value={address.House}
          placeholder="Flat, House, Building"
          onChange={onChange}
        />
        <Input
          name="Village"
          type="text"
          value={address.Village}
          placeholder="Area, Street, Village"
          onChange={onChange}
        />
        <Input
          name="Landmark"
          type="text"
          value={address.Landmark}
          placeholder="Landmark (e.g. near Civil Hospital)"
          onChange={onChange}
        />
        <Input
          name="Town"
          type="text"
          value={address.Town}
          placeholder="Town"
          onChange={onChange}
        />
        <div className="flex max-md:flex-col w-full gap-4">
          <Input
            name="State"
            type="text"
            value={address.State}
            placeholder="State"
            onChange={onChange}
          />
          <Input
            name="Country"
            type="text"
            value={address.Country}
            placeholder="Country"
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="text-white w-full py-2 rounded-xl bg-red-600"
        >
          Add Address
        </button>
      </form>
    </section>
  );
};

export default Address;
