import useFavourites from "../hooks/useFavourites";
import { useAuth0 } from "@auth0/auth0-react";
export const Favourites = () => {
  const { user } = useAuth0();
  const { data, isError, isLoading, refetch } = useFavourites(user?.email);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!data && <h1 className="text-3xl text-center">No Favourites</h1>}
      {data && data.map((fav) => <p key={fav._id}>{fav.propertyID}</p>)}
    </div>
  );
};
