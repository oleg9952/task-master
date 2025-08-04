import { Categories } from "../../shared/components/Categories";
import { Text } from "../../shared/components/Text";

const Home = () => {
  return (
    <div className="pt-4 max-w-screen-xl mx-auto">
      <Text variant="h1" className="text-3xl font-bold pb-1">
        My Categories
      </Text>
      <Text className="text-subcontent text-[18px] pb-10">
        Organize your tasks into categories for a clutter-free workflow.
      </Text>
      <Categories />
    </div>
  );
};

export default Home;
