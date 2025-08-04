import { calculatePercentage } from "../../utils/calculations";
import { Text } from "../Text";

type ProgressProps = {
  total: number;
  completed: number;
};

const Progress = ({ total, completed }: ProgressProps) => {
  const percentage = calculatePercentage(completed, total);

  return (
    <div>
      <div className="flex justify-between pb-3">
        <Text>
          {completed}/{total} tasks completed
        </Text>
        <Text className="text-subcontent">{percentage}%</Text>
      </div>
      <div className="relative h-[10px] bg-gray-200 overflow-hidden rounded-xl">
        <div
          className={`absolute h-full left-0 top-0 bg-green-400`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
