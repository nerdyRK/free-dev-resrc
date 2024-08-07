// ResourceCard.js
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

function ResourceCard({ resource }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(resource.id));
  }, [resource.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(resource.id)) {
      const newFavorites = favorites.filter((id) => id !== resource.id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(resource.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
      <h3 className="text-xl text-primary font-semibold">{resource.name}</h3>
      <p className="mt-2 text-secondary italic">{resource.description}</p>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-tertiary hover:underline"
      >
        Visit Website
      </a>
      <FaStar
        onClick={toggleFavorite}
        className={`mt-4 cursor-pointer ${
          isFavorite ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    </div>
  );
}

export default ResourceCard;
