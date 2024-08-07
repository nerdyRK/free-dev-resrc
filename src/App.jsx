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
      <Outlet />
    </div>
  );
};
export default App;
