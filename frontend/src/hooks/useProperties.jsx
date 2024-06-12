import { useQuery } from "react-query";
import { getAllProperties } from "../api/apiFunctions";

const useProperties = () => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["allProperties"],
    queryFn: getAllProperties,
  });
  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useProperties;
