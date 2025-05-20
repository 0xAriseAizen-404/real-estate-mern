import { RiHeart2Fill, RiHeart2Line } from "@remixicon/react";
import { useState } from "react";

export const Favourite = ({ item }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = (id) => {
    setIsFavourite((prev) => !prev);
  };
  return (
    <div className="absolute top-5 right-5 z-10">
      {isFavourite ? (
        <RiHeart2Fill
          className="text-red-500 cursor-pointer"
          onClick={() => handleFavourite(item.id)}
        />
      ) : (
        <RiHeart2Line
          onClick={() => handleFavourite(item.id)}
          className="hover:text-red-500 cursor-pointer"
        />
      )}
    </div>
  );
};
