import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProperty } from "../api/apiFunctions";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import {
  RiCarFill,
  RiExchangeDollarFill,
  RiHospitalFill,
  RiHotelBedFill,
  RiMapPinFill,
  RiShowersFill,
} from "@remixicon/react";
import { Map } from "../components/Map";

export const Property = () => {
  const { propertyId } = useParams();
  const { data, isError, isLoading } = useQuery(["residency", propertyId], () =>
    getProperty(propertyId)
  );
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
    <div>
      {!data && <div>Error while fetching data</div>}
      {data && (
        <div className="w-full p-10 flex flex-col items-center gap-6">
          <img
            src={data.image}
            alt={data.title}
            className="w-[60vw] rounded-xl"
          />
          <div className="w-full flex-center gap-4">
            <div className="w-1/2 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl tex-blue-900 font-bold">
                  {data.title}
                </h1>
                <h1 className="text-2xl text-slate-500 font-bold flex gap-2 items-center">
                  <RiExchangeDollarFill className="text-yellow-500 font-bold" />
                  {data.price}
                </h1>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div className="flex gap-2">
                  <RiShowersFill />
                  {data.facilities.bathrooms} Bathrooms
                </div>
                <div className="flex gap-2">
                  <RiCarFill />
                  {data.facilities.parkings} Parkings
                </div>
                <div className="flex gap-2">
                  <RiHotelBedFill />
                  {data.facilities.bedrooms} Bedrooms
                </div>
              </div>
              <p className="text-slate-700">{data.description}</p>
              <div className="flex gap-2">
                <RiMapPinFill />
                {` ${data.address}, ${data.city}, ${data.country}`}
              </div>
              <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-3 hover:scale-95 transition-all rounded-md">
                Book Your Visit
              </button>
            </div>
            <div className="w-1/2 h-[45vh] flex-center overflow-hidden">
              <Map
                address={data.address}
                city={data.city}
                country={data.country}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
