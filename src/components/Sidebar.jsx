// Sidebar.js
import { Link } from "react-router-dom";
import { categories } from "../utils/categories";

function Sidebar() {
  return (
    <div className="w-64 bg-bgd text-white sidebar h-screen p-4 fixed z-1">
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href={`#${category}`}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          to="/favorites"
          className="block py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded text-center"
        >
          Favorites
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
