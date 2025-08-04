import { Progress } from "../../shared/components/Progress";
import { Tasker } from "../../shared/components/Tasker";
import { Text } from "../../shared/components/Text";

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-4">
      <Text variant="h1" className="text-3xl font-bold pb-1">
        My Categories
      </Text>
      <Text className="text-subcontent text-[18px] pb-3">
        You have 10 tasks in this category.
      </Text>
      <div className="pb-5">
        <Progress total={10} completed={6} />
      </div>
      <Tasker />
    </div>
  );
};

export default Category;
