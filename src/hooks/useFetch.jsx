import service from "../utils/database";
import { useQuery } from "@tanstack/react-query";

const useFetch = (id, querykey) => {
  const fetchData = async () => {
    const data = await service.getAllData(id);
    return data.documents;
  };
  const { isLoading, error, data } = useQuery({
    queryKey: [querykey],
    queryFn: fetchData,
    staleTime: 100000,
  });

  return { isLoading, error, data };
};

export default useFetch;
