import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import FramerDown from "../Framer/FramerDown";
import FramerUp from "../Framer/FramerUp";

import heroImg from "../../assets/hero.png";
import Button from "../Button";

const Header = () => {
  const { status } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-200 flex max-md:flex-col justify-center items-center md:flex-wrap gap-12">
      <div className="max-w-[500px]">
        <FramerDown>
          <h1 className="max-md:text-center text-3xl md:text-5xl font-semibold font-roboto">
            We seek Adventure ! <br />
            Explore the nature with
            <span className="text-red-600"> Adventure Vault</span>
          </h1>
        </FramerDown>
        <FramerUp>
          <div className="mt-8 w-full flex max-md:justify-center items-center gap-6">
            <Link to="/all-products">
              <Button>Explore</Button>
            </Link>
            {!status && (
              <Link to="/signup">
                <button className="px-8 py-2 text-base lg:text-lg rounded-full border-2 border-red-600 hover:bg-red-600 duration-200 font-poppins text-red-600 hover:text-white">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </FramerUp>
      </div>
      <FramerUp>
        <div className="md:h-[500px] max-md:w-full">
          <img
            src={heroImg}
            alt="Camping Image"
            className="h-full w-full object-cover drop-shadow-red animate-image"
          />
        </div>
      </FramerUp>
    </div>
  );
};

export default Header;

