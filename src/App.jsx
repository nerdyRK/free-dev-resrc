import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  useEffect(() => {
    setIsOverlay(true);
    let id = setTimeout(() => setIsOverlay(false), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bg-[#193549] min-h-screen text-slate-100">
      <div
        className={`${
          isOverlay ? "overlay" : "translate-y-[-100vh]"
        } bg-black absolute inset-0 duration-1000`}
      >
        <h1 className="absolute max-w-2/3 left-[12vw] px-10 text-center sm:text-5xl text-3xl top-[40vh]">
          Your First source for development ease journey..🚌
        </h1>
      </div>
    </div>
  );
};
export default App;
