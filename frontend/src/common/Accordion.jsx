import {
  RiArrowDownSFill,
  RiCloseFill,
  RiShieldCheckFill,
  RiWallet2Fill,
} from "@remixicon/react";
import { useState } from "react";

export const Accordion = ({ id, title, desc, accordion, setAccordion }) => {
  const isOpen = accordion === id;

  const toggleAccordion = () => {
    setAccordion(isOpen ? null : id);
  };

  return (
    <div className="p-3 bg-white space-y-3 border-b">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className={`p-[0.15em] bg-slate-300 rounded-md`}>
          {id === 0 && <RiShieldCheckFill className="text-blue-600" />}
          {id === 1 && <RiCloseFill className="text-blue-600" />}
          {id === 2 && <RiWallet2Fill className="text-blue-600" />}
        </div>
        <span className="text-blue-900 font-bold text-lg">{title}</span>
        <div className={`p-[0.15em] bg-slate-300 rounded-md`}>
          <RiArrowDownSFill
            className={`text-blue-600 transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-400 mt-2">{desc}</p>
      </div>
    </div>
  );
};
