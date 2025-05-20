import { useQuery } from "react-query";
import { getAllFavourites } from "../api/apiFunctions";

const useProperties = (email) => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allFavourites",
    getAllFavourites(email),
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};
export default useProperties;
