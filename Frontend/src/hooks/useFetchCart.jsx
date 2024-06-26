import { useEffect, useState } from "react";
import service from "../utils/database";
import { useDispatch } from "react-redux";

const useFetchCart = (id, setData) => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await service.getAllData(id);
        if (data) {
          dispatch(setData(data.documents));
        }
      } catch (err) {
        alert("Error:: " + err);
        setError(err);
      }
      setIsLoading(false);
    };
    getData();
  }, [dispatch]);

  return { isLoading, error };
};

export default useFetchCart;
