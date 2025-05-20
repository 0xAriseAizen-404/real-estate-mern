import { toast } from "react-toastify";
import { Search } from "../common/Search";
import useProperties from "../hooks/useProperties";
import { PulseLoader } from "react-spinners";
import { PropertyCard } from "../common/PropertyCard";
import { Link } from "react-router-dom";
import { Favourite } from "../common/Favourite";

export const Properties = () => {
  const { data, isError, isLoading, refetch } = useProperties();
  if (isError) {
    toast.error("Couldn't fetch data");
    return <div>Error while fetching data</div>;
  }
  if (isLoading) {
    return (
      <div className="w-full bg-red flex-center min-h-screen">
        <PulseLoader color="#ff6366" />
      </div>
    );
  }
  return (
    <div className="p-5 lg:p-10 flex flex-col items-center justify-center bg-white">
      <Search />
      <div className="px-5 flex items-center justify-center lg:justify-start gap-4 flex-wrap py-6 hide-scrollbar overflow-x-auto">
        {data.map((item) => (
          <div className="relative" key={item.id}>
            <Favourite item={item} />
            <Link to={`/properties/${item.id}`}>
              <PropertyCard item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
