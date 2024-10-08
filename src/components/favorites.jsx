// Favorites.js
import { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";
import categories from "../utils/sitesData";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    // Assuming you have a function or data to fetch resources based on IDs
    const favoriteResources = categories
      .flatMap((category) => category.resources)
      .filter((resource) => favoriteIds.includes(resource.id));
    setFavorites(favoriteResources);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {favorites?.length === 0 && <p>No favorites added yet.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
