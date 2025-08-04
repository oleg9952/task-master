import { useNavigate } from "react-router";
import { Text } from "../Text";

const CategoryCard = () => {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      tabIndex={0}
      className="group rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-500 bg-white dark:bg-gray-700 flex flex-col cursor-pointer overflow-hidden"
      onClick={() => navigate("/category/test")}
    >
      <div className="h-[200px] object-cover overflow-hidden">
        <img
          className="aspect-square size-full object-cover group-hover:scale-105 transition-all duration-500"
          src="https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg"
        />
      </div>
      <div className="p-4">
        <Text variant="h2" className="font-bold">
          Category name
        </Text>
        <Text>5 tasks.</Text>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-5">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};

export default Categories;
