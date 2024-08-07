import { useState } from "react";
import { useEffect } from "react";
const Overlay = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  useEffect(() => {
    setIsOverlay(true);
    let id = setTimeout(() => setIsOverlay(false), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      className={`${
        isOverlay ? "overlay" : "translate-y-[-100vh]"
      } bg-black fixed inset-0 z-111 duration-1000`}
    >
      <h1 className="absolute sm:max-w-2/3 sm:left-[12vw] left-[0vw] px-10 sm:px-10 text-center sm:text-5xl text-3xl top-[40vh]">
        Your First source for development ease journey..🚌
      </h1>
    </div>
  );
};
export default Overlay;
