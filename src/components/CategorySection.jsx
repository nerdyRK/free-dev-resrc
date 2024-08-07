import ResourceCard from "./ResourceCard";

function CategorySection({ category }) {
  console.log(category);
  return (
    <div id={category.category} className="my-8">
      <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category?.resources?.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
