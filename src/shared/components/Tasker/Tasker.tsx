import { cn } from "../../utils/styles";
import { Text } from "../Text";

const Section = ({ isCompleted }: { isCompleted?: boolean }) => {
  return (
    <div className="grow">
      <Text variant="h2" className="font-medium text-lg">
        {isCompleted ? "Completed" : "To-Do"}
      </Text>
      <div className="flex flex-col gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            className={cn(
              "shadow-sm bg-white dark:bg-[#1f2937] p-3 rounded-sm",
              {
                "opacity-50": isCompleted,
                "line-through": isCompleted,
              }
            )}
          >
            <Text>item-{index}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

const Tasker = () => {
  return (
    <div className="flex max-md:flex-col justify-between gap-10">
      <Section />
      <Section isCompleted />
    </div>
  );
};

export default Tasker;
