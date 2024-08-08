import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sm:ml-64 flex justify-end gap-x-4 sticky top-0 text-lg items-center pr-4 bg-bgd h-14 py-8">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">Contribute</Link>
    </div>
  );
};
export default Navbar;
