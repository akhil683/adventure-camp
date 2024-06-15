import React from "react";
import WishlistCard from "../components/WishlistCard";

const Wishlist = ({ products }) => {
  return (
    <section className="md:px-16 px-4 pt-16 min-h-screen bg-white">
      <h1 className="md:text-5xl text-3xl font-bebasNeue mb-8">My Wishlist</h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {products?.map((product) => (
          <WishlistCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
