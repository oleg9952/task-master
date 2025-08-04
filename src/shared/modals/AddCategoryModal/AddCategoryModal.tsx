import { Text } from "../../components/Text";

const AddCategoryModal = () => {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <label>
          <Text className="text-[#c4c9d0] pb-2">Category name</Text>
          <input
            type="text"
            name="categoryName"
            placeholder="Groceries"
            className="placeholder:text-gray-700 bg-[#101827] px-2 py-1 rounded-lg border-1 border-[#404853] text-subcontent w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </label>
        <label>
          <Text className="text-[#c4c9d0] pb-2">Category name</Text>
          <input
            type="text"
            name="categoryName"
            placeholder="Groceries"
            className="placeholder:text-gray-700 bg-[#101827] px-2 py-1 rounded-lg border-1 border-[#404853] outline-none text-subcontent w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </label>
      </form>
    </div>
  );
};

export default AddCategoryModal;
