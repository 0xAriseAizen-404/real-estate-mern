export const Footer = () => {
  return (
    <div className="px-10 py-8 bg-white">
      <div className="flex items-center justify-between">
        <div className="left">
          <img src="/images/logo2.png" alt="logo-2" />
          <p className="text-slate-500 w-[240px]">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className="right">
          <h3 className="text-5xl font-bold text-blue-800">Information</h3>
          <p className="text-slate-500 my-2">145 Hyderabad, AP, India</p>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className=" text-black">
              Home
            </a>
            <a href="#" className=" text-black">
              About
            </a>
            <a href="#" className=" text-black">
              Services
            </a>
            <a href="#" className=" text-black">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
