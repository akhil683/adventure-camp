import { useQuery } from "@tanstack/react-query";
import service from "../utils/database";

const useFetchQueryData = (collectionId, querykey, query) => {
  const fetchData = async () => {
    const data = await service.getQueryData(collectionId, query);
    return data.documents;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [querykey],
    queryFn: fetchData,
    staleTime: 10000,
  });

  return { isLoading, error, data };
};

export default useFetchQueryData;
