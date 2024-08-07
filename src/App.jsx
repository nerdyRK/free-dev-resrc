import { Outlet } from "react-router-dom";
import "./App.css";
import Overlay from "./components/Overlay";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-[#193549] flex min-h-screen text-slate-100">
      <Overlay />
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default App;
