import { RiDeleteBin5Line } from "react-icons/ri";
import { Text } from "../../components/Text";
import { TiPlus } from "react-icons/ti";

const AddTaskModal = () => {
  return (
    <div>
      <form className="flex flex-col gap-5">
        <section>
          <Text className="pb-1">Tasks</Text>
          <div className="flex flex-col gap-2 pb-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="flex items-center justify-between gap-x-2">
                <input
                  key={index}
                  type="text"
                  name="categoryName"
                  placeholder="Groceries"
                  className="dark:placeholder:text-gray-700 dark:bg-[#101827] px-2 py-1 rounded-lg border-1 border-[#404853] outline-none text-subcontent w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button type="button" className="cursor-pointer">
                  <RiDeleteBin5Line
                    size={20}
                    className="text-red-600 hover:text-red-400 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-x-1 text-blue-500 cursor-pointer hover:text-blue-600"
          >
            <TiPlus />
            <Text className="text-blue-500 hover:text-blue-600 font-black">
              Add Task
            </Text>
          </button>
        </section>
        <div className="flex justify-end gap-x-2.5 border-t-1 pt-5 border-t-[#4b5563]">
          <button
            type="button"
            className="bg-[#374151] hover:bg-[#4d5b71] text-[#d1d5db] px-5 py-1.5 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-button-primary hover:bg-[#85bcf4] text-[#d1d5db] px-5 py-1.5 rounded-lg cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;
