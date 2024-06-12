import { PulseLoader } from "react-spinners";
import { PropertyCard } from "../common/PropertyCard";
import { toast } from "react-toastify";
import useProperties from "../hooks/useProperties";
import { Link } from "react-router-dom";

export const Slider = () => {
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
    <div className="w-full bg-white px-10 py-4">
      <h1 className="text-3xl text-primary-500 font-bold">Best Choices</h1>
      <h1 className="text-5xl text-blue-900 font-bold">Popular Residencies</h1>
      <div className="px-5 flex items-center justify-between gap-4 overflow-x-auto py-6 hide-scrollbar">
        {data.slice(0, 8).map((item) => (
          <Link to={`/properties/${item.id}`} key={item.id}>
            <PropertyCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
