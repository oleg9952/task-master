import { IoMdCloseCircle } from "react-icons/io";
import { AddCategoryModal } from "../AddCategoryModal";
import { Text } from "../../components/Text";

const BaseModal = () => {
  return (
    <div className="fixed top-0 left-0 min-h-screen min-w-screen">
      <div className="bg-[rgba(0,0,0,0.85)] z-0 min-h-screen min-w-screen"></div>
      <div className="bg-background dark:bg-[#1f2937] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] min-w-[400px] min-h-[400px] w-[500px] rounded-xl p-5">
        <div>
          <div>
            <div className="flex justify-between">
              <Text variant="h1" className="font-bold text-xl">
                Title
              </Text>
              <IoMdCloseCircle
                size={30}
                role="button"
                tabIndex={0}
                className="cursor-pointer dark:text-white hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200"
              />
            </div>
            <div className="bg-gray-300 w-full h-[1px] my-2" />
          </div>
          <div>
            <AddCategoryModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
