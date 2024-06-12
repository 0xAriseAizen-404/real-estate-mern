import { RiMapPinFill } from "@remixicon/react";

export const Search = () => {
  return (
    <div className="rounded-full border border-slate-400 flex-center gap-2 min-w-[350px] max-w-[400px] py-[5px] px-2 bg-white">
      <RiMapPinFill className="text-primary-500" size={40} />
      <input
        type="text"
        className="w-full p-2 px-4 text-black focus:outline-none"
        placeholder="Search by title/city/country"
      />
      <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-3 hover:scale-110 transition-all rounded-full">
        Search
      </button>
    </div>
  );
};
