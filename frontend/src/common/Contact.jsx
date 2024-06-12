import {
  RiChat3Fill,
  RiMessage2Fill,
  RiPhoneFill,
  RiVideoChatFill,
} from "@remixicon/react";

export const Contact = ({ title }) => {
  const getIcon = (title) => {
    switch (title) {
      case "Call":
        return <RiPhoneFill className="text-blue-700" />;
      case "Chat":
        return <RiChat3Fill className="text-blue-700" />;
      case "Video Call":
        return <RiVideoChatFill className="text-blue-700" />;
      case "Message":
        return <RiMessage2Fill className="text-blue-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="text-black flex flex-col gap-4 p-4">
      <div className="flex items-center gap-6">
        <div className={`p-[0.5em] bg-slate-200 rounded-md`}>
          {getIcon(title)}
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg lg:text-xl font-bold text-blue-700 ">
            {title}
          </h1>
          <h4 className="text-slate-400 text-sm">324 455 356 34</h4>
        </div>
      </div>
      <button className="p-[0.5em] bg-slate-200 rounded-md w-full hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-500 hover:scale-90">{`${title} Now`}</button>
    </div>
  );
};
