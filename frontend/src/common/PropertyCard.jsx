import { RiExchangeDollarFill } from "@remixicon/react";
import { truncate } from "lodash";

export const PropertyCard = ({ item }) => {
  return (
    <div className="flex flex-col justify-center min-w-[250px] w-[350px] h-[375px] bg-white shadow rounded-lg px-4 py-2 gap-2 hover:shadow-lg hover:scale-95 hover:cursor-pointer transition-all ease-in-out duration-500 hover:bg-gradient-to-t from-red-100 to-blue-100 relative">
      <img
        src={`${item.image}`}
        alt={item.title}
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <h1 className="text-2xl text-slate-500 font-bold flex gap-2 items-center">
        <RiExchangeDollarFill className="text-yellow-500 font-bold" />
        {item.price}
      </h1>
      <h1 className="text-2xl text-blue-900 font-bold">
        {truncate(item.title, { length: 15 })}
      </h1>
      <p className="text-sm text-gray-600 tracking-tighter">
        {truncate(item.description, { length: 80 })}
      </p>
    </div>
  );
};
