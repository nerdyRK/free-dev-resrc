import data from "../utils/sitesData";

const categories = [];

data.forEach((category) => {
  categories.push(category.category);
});

export default categories;
