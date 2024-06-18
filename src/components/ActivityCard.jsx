import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ActivityCard = ({ adventure }) => {
  const { name, imageURL, price, ActualPrice, location, rating, $id } =
    adventure;
  return (
    <Link
      to={`/booking/${$id}`}
      className="sm:max-w-[300px] w-full p-4  rounded-lg hover:shadow-2xl hover:shadow-gray-300 duration-200"
    >
      <div className="w-full sm:h-[220px] h-[250px] rounded-lg overflow-hidden">
        <img src={imageURL} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex justify-between">
        <h3 className="text-3xl mt-2 font-semibold font-bebasNeue">{name}</h3>
        <span className="flex items-center">
          <FaStar className="text-green-600" /> ({rating})
        </span>
      </div>
      <p className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      </p>
      <p className="font-semibold font-bebasNeue text-2xl my-1">
        <strike className="text-lg text-gray-500 mr-2">{ActualPrice}</strike>
        {price}
      </p>
      <div className="flex justify-between">
        <button className="flex w-[75%] justify-center items-center gap-2 text-lg font-roboto py-2 rounded-lg bg-green-600 text-white">
          Book Now
        </button>
        <button className="flex w-[20%] justify-center items-center gap-2 text-lg font-roboto py-2 rounded-lg border hover:border-red-600 hover:text-red-600 duration-200">
          <FaHeart />
        </button>
      </div>
    </Link>
  );
};

export default ActivityCard;
