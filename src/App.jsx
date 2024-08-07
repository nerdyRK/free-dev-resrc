import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";

const App = () => {
  return (
    <div className="bg-bgd min-h-screen text-slate-100">
      <Navbar />
      <Sidebar />
      <Overlay />
      <div className="sm:ml-64 bg-bgl min-h-[92vh] p-4">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
