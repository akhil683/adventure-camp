import React, { useEffect } from "react";
import ActivityCard from "../components/Cards/ActivityCard";
import service from "../utils/database";
import config from "../config/config";
import { useDispatch } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductItems = async () => {
      setIsLoading(true);
      const products = await service.getAllData(
        config.appwriteProductCollectionId
      );
      console.log(products?.documents);
      if (products) {
        dispatch(setProducts(products.documents));
      }
      setIsLoading(false);
    };
    getProductItems();
  }, [dispatch]);

  return (
    <section className="md:px-16 px-4 pt-16 min-h-screen bg-white">
      <h1 className="md:text-5xl text-3xl font-bebasNeue mb-8">My Wishlist</h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <ActivityCard />
      </div>
    </section>
  );
};

export default Wishlist;
