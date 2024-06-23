import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import Container from "../Layout/Container";
import ProductImg from "../../assets/campingImg.jpg";
import FramerUp from "../Framer/FramerUp";
import FramerDown from "../Framer/FramerDown";

const Products = () => {
  return (
    <Container>
      <div className="relative md:min-h-screen font-poppins flex justify-center md:items-center gap-6 flex-wrap-reverse">
        <FramerUp>
          <div className="md:pt-48 text-lg max-w-[400px]">
            <p>
              <span className="text-4xl font-semibold text-red-500">D</span>{" "}
              iscover the Great Outdoors fun activites like{" "}
            </p>
            <p className="my-6 px-2 text-base">
              Lorem ipsum sectetur adipisicing elit. Maxime hic, soluta nostrum
              reprehenderit nulla tenetur ad corrupti ea nesciunt laboriosam
              labore beatae, deserunt molestias omnis in, velit voluptates aut.
              Tempora temporibus doloremque non fugit adipisci.
            </p>
            <Link to="/all-products">
              <Button color="red">Explore Vault</Button>
            </Link>
          </div>
        </FramerUp>

        <h2 className="lg:absolute md:top-[18%] left-0 lg:text-7xl md:text-5xl text-4xl font-semibold text-green-600 max-w-[900px] z-20">
          Nature's Playground: Camping Vault
        </h2>

        <FramerDown>
          <div className=" md:h-[500px] h-[250px] md:w-[700px] w-[400px] relative">
            <img
              src={ProductImg}
              alt="Adventure Activities"
              className="absolute h-full w-full object-cover"
            />
          </div>
        </FramerDown>
      </div>
    </Container>
  );
};

export default Products;
