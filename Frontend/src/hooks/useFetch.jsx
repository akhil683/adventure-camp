import service from "../utils/database";
import { useQuery } from "@tanstack/react-query";

const useFetch = (collectionId, querykey) => {
  const fetchData = async () => {
    const data = await service.getAllData(collectionId);
    return data.documents;
  };
  const { isLoading, error, data } = useQuery({
    queryKey: [querykey],
    queryFn: fetchData,
  });
  return { isLoading, error, data };
};

export default useFetch;
