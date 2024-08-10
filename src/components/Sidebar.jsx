// Sidebar.js
import categories from "../utils/categories";

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className="w-64 bg-bgd text-white sm:block hidden sidebar h-screen p-4 fixed z-2">
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
    </div>
  );
}

export default Sidebar;
