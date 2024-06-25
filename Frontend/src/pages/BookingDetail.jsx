import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BookingDetail = () => {
  const { id } = useParams();
  const { adventures } = useSelector((state) => state.adventures);
  const [adventure, setAdventure] = useState({});
  console.log(adventures);

  useEffect(() => {
    const getProduct = () => {
      const adventureInfo = adventures?.find(
        (adventure) => adventure?.$id === id,
      );
      setAdventure(adventureInfo);
    };
    getProduct();
  }, []);

  console.log(adventure);
  const {
    name,
    location,
    rating,
    rated,
    imageURL,
    ActualPrice,
    price,
    description,
  } = adventure;

  return (
    <div className="w-full min-h-screen bg-white py-12 font-roboto">
      <div className="relative md:h-screen h-[35vh] flex justify-center items-center bg-black text-white">
        <img
          src={imageURL}
          alt=""
          className="absolute w-full h-full object-cover md:opacity-60"
        />
        <h2 className="text-7xl max-md:hidden text-center font-bebasNeue z-20 text-green-500">
          {name}
        </h2>
      </div>
      <div className="md:pt-12 pt-4 px-4 md:px-8">
        <div className="flex max-md:flex-col md:justify-between gap-6">
          <div className="p-4 w-full md:w-[58%] bg-gray-200 rounded-lg">
            <p className="md:text-4xl text-2xl px-4 py-1 border-l-4 font-semibold border-green-600">
              {name}
            </p>
            <div className="py-4 text-sm flex justify-around  items-center">
              <span className=" text-gray-800 flex gap-2 items-center">
                <MdLocationOn className="text-lg" /> {location}
              </span>
              <span>{rated} ratings</span>
              <span className="flex gap-2 items-center rounded-lg">
                <FaStar className="text-green-600" />
                {rating}/10
              </span>
            </div>
          </div>
          <div className=" bg-gray-200 p-3 rounded-lg max-md:w-full w-[40%]">
            <p className="text-gray-600 text-lg">
              Starting from{" "}
              <strike className="font-bebasNeue">&#8377; {ActualPrice}</strike>
            </p>
            <p className="my-2 text-red-600">
              <span className="text-5xl font-bebasNeue ">&#8377; {price}</span>{" "}
              per day
            </p>
            <button className="w-full bg-green-600 text-white text-xl hover:bg-red-600 duration-200 py-2 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
        <div className="my-8 flex max-md:flex-col justify-between gap-6">
          <div className="bg-gray-200 rounded-lg p-4 md:w-[58%]">
            <p className="text-2xl font-semibold">Description</p>
            <p className="max-md:text-sm my-4">{description}</p>
          </div>
          <div className="rounded-lg md:w-[40%]">
            <table>
              <tbody>
                <tr>
                  <th>Specifications</th>
                  <th>Values</th>
                </tr>
                <tr>
                  <td>Engine</td>
                  <td>411cc</td>
                </tr>
                <tr>
                  <td>Power</td>
                  <td>24.83 PS @ 6500 rpm</td>
                </tr>
                <tr>
                  <td>Fuel tank</td>
                  <td>15 L</td>
                </tr>
                <tr>
                  <td>Mileage</td>
                  <td>45km/L</td>
                </tr>
                <tr>
                  <td>Ground clearance</td>
                  <td>220 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
