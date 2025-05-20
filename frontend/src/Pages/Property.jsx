import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getProperty, removeBooking } from "../api/apiFunctions";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import {
  RiCarFill,
  RiExchangeDollarFill,
  RiHotelBedFill,
  RiMapPinFill,
  RiShowersFill,
} from "@remixicon/react";
import { Map } from "../components/Map";
import { useContext, useState } from "react";
import useAuthCheck from "../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../components/BookingModal";
import { UserDetailContext } from "../context/UserDetailContext";
import { Favourite } from "../common/Favourite";

export const Property = () => {
  const { propertyId } = useParams();
  const { data, isError, isLoading } = useQuery(["residency", propertyId], () =>
    getProperty(propertyId)
  );

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  const [modalOpen, setModalOpen] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();
  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(propertyId, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== propertyId),
      }));

      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });

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
        <div className="w-full p-10 flex flex-col items-center gap-6 relative">
          <Favourite item={data} />
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
              {bookings?.map((booking) => booking.id).includes(propertyId) ? (
                <>
                  <button
                    className="outline text-primary-500 font-semibold py-2 px-3 hover:scale-95 transition-all rounded-md"
                    onClick={() => cancelBooking()}
                    disabled={cancelling}
                  >
                    Cancel your visit
                  </button>
                  <p>
                    Your visit is already booked for
                    {
                      bookings?.filter(
                        (booking) => booking?.id === propertyId
                      )[0].date
                    }
                  </p>
                </>
              ) : (
                <button
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-3 hover:scale-95 transition-all rounded-md"
                  onClick={() => {
                    validateLogin() && setModalOpen((prev) => !prev);
                  }}
                >
                  Book Your Visit
                </button>
              )}

              <BookingModal
                opened={modalOpen}
                setOpened={setModalOpen}
                propertyId={propertyId}
                email={user?.email}
              />
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
