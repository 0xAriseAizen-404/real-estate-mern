import { useState } from "react";
import { Accordion } from "../common/Accordion";

export const Accordination = () => {
  const [accordion, setAccordion] = useState("0");
  const data = {
    0: {
      title: "Best interest rates on the market",
      desc: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    1: {
      title: "Prevent unstable prices",
      desc: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    2: {
      title: "Best price on the market",
      desc: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
  };

  return (
    <div className="w-full flex min-h-screen flex-col lg:flex-row p-10 lg:gap-10 gap-[5rem]">
      <div className=" lg:w-3/6 w-full flex-center">
        <img
          src="./images/value.png"
          alt="hero"
          className="min-h-[75vh] lg:h-[90vh] w-full sm:w-4/6 lg:w-5/6 rounded-2xl rounded-t-[15rem]  border-primary-600 border-4"
        />
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-start flex-col gap-4">
        <h1 className="text-3xl text-primary-500 font-bold">Our Value</h1>
        <h1 className="text-4xl text-blue-600 font-bold">
          Value We Give to You
        </h1>
        <p className="truncate-tighter text-slate-400">
          We are always ready to help by providing the best services for you. We
          believe a good place to live can make your life better.
        </p>
        <div className="accordions flex flex-col gap-4 pt-6">
          {Object.keys(data).map((key) => (
            <Accordion
              key={key}
              id={key}
              title={data[key].title}
              desc={data[key].desc}
              accordion={accordion}
              setAccordion={setAccordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
