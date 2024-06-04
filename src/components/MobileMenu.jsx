import React from "react";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { MdCardTravel, MdOutlineLogin } from "react-icons/md";
import { TbActivityHeartbeat, TbTruckDelivery } from "react-icons/tb";
import { RiMotorbikeFill } from "react-icons/ri";

import logo from "../assets/logo.png";
import authService from "../utils/auth";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ showMenu, toggleMenu }) => {
  const show = showMenu ? "right-0" : "-right-[100%]";
  const bgShow = showMenu ? "block" : "hidden";
  const navigate = useNavigate()

  const handleLogOut = () => {
    authService.logout()
    navigate("/") 
  }

  return (
    <>
      <div
        className={`${bgShow} w-screen h-screen absolute top-0 left-0 z-40 bg-black bg-opacity-5`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`${show} py-16 px-4 absolute top-0 duration-200 h-screen font-bebasNeue bg-white md:hidden w-[70%] z-50`}
      >
        <button className="absolute top-6 left-6 text-3xl" onClick={toggleMenu}>
          <RxCross2 />
        </button>
        <div className="text-3xl text-center flex flex-col items-center justify-center gap-4">
          <img
            src={logo}
            width={150}
            height={150}
            alt="Adventure Vault's Logo"
          />
          <p className="text-3xl text-green-600">Adventure Vault</p>
        </div>

        <hr className="bg-gray-300 h-[2px] my-8" />

        <ul className=" pl-4 text-xl flex flex-col gap-4">
          <li>
            <Link
              onClick={toggleMenu}
              to="/"
              className="flex py-2 gap-2 items-center"
            >
              <GoHomeFill className="text-2xl" />
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/all-products"
              className="flex py-2 gap-2 items-center"
            >
              <MdCardTravel className="text-2xl" />
              Products
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/activities"
              className="flex py-2 gap-2 items-center"
            >
              <TbActivityHeartbeat className="text-2xl" />
              Activities
            </Link>
          </li>
          <li>
            <Link 
            onClick={toggleMenu}
               to="/vehicles" 
               className="flex py-2 gap-2 items-center"
            >
              <RiMotorbikeFill className="text-2xl" />
              Vehicles
            </Link>
          </li>
          <li>
            <Link 
               onClick={toggleMenu} 
               to="/orders" 
               className="flex py-2 gap-2 items-center"
            >
              <TbTruckDelivery className="text-2xl" />
              Orders
            </Link>
          </li>
        </ul>

        <hr className="bg-gray-300 h-[2px] my-8" />
        <Link
         onClick={toggleMenu}
          to="/login"
          className="flex gap-3 justify-center items-center py-3 w-full font-roboto bg-black text-white text-xl rounded-lg"
        >
          Log In
          <MdOutlineLogin />
        </Link>
        <button
          onClick={handleLogOut}
          className="mt-4 flex gap-3 justify-center items-center py-3 w-full font-roboto bg-black text-white text-xl rounded-lg"
        >
          Log Out
          <MdOutlineLogin />
        </button>
      </div>
    </>
  );
};

export default MobileMenu;
