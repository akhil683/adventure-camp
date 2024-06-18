import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import DropDownPlaces from "../components/DropDownPlaces";
import Container from "../components/Container";
import ActivityCard from "../components/ActivityCard";
import { getAdventures } from "../store/adventureSlice";
import { useSelector } from "react-redux";
import service from "../utils/database";
import config from "../config/config";

const Activity = () => {
  const locations = [
    "All Regions",
    "Manali, Himachal Pradesh",
    "Shimla, Himachal Pradesh",
    "Massorie, Utrakhand",
    "Dharamshala, Himachal Pradesh",
  ];
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductItems = async () => {
      setIsLoading(true);
      const products = await service.getAllData(
        config.appwriteAdventureCollectionId
      );
      if (products) {
        dispatch(getAdventures(products.documents));
      }
      setIsLoading(false);
    };
    getProductItems();
  }, [dispatch]);

  const { adventures } = useSelector((state) => state.adventures);
  return (
    <Container>
      <div className="flex justify-between flex-wrap items-center py-12 px-20 max-md:px-4 pb-4">
        <h2 className="md:text-5xl text-2xl font-bebasNeue">Packages</h2>
        <DropDownPlaces products={locations} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {adventures?.map((adventure) => (
          <ActivityCard key={adventure.$id} adventure={adventure} />
        ))}
      </div>
    </Container>
  );
};

export default Activity;
