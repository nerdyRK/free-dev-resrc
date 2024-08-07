import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ml-64 flex justify-end gap-x-4 text-lg items-center mr-4 bg-bgd h-14">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">Contribute</Link>
    </div>
  );
};
export default Navbar;
