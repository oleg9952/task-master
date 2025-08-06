import { Outlet, useLocation, useNavigate } from "react-router";
import { MdFileDownloadDone } from "react-icons/md";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { FaPlus } from "react-icons/fa";
import { ButtonVariantsMap } from "../../components/Button/Button";
import { SettingsBtn } from "../../components/SettingsBtn";
import { Paths } from "../../../pages";
import { RandomPicturesService } from "../../../api/randomPictures.service";
import { BaseModal } from "../../modals/BaseModal";

const PrimaryLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCategoryPage = location.pathname.includes("category");

  return (
    <div className="border-2 min-h-screen flex flex-col">
      <header className="bg-white dark:bg-background dark:border-b-2 dark:border-b-[#374151] relative h-[60px] shadow-sm px-2">
        <div className="max-w-screen-xl flex justify-between m-auto h-full">
          <div
            className="flex items-center gap-1.5 cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => navigate(Paths.home)}
          >
            <MdFileDownloadDone size={27} color="#3e98f4" />
            <Text className="font-bold text-xl">TaskMaster</Text>
          </div>
          <div className="flex items-center gap-2.5">
            <Button
              variant={ButtonVariantsMap.primary}
              onClick={() => RandomPicturesService.getRandomPic()}
            >
              <div className="flex items-center gap-1">
                <FaPlus />
                <div className="font-bold text-sm">
                  {isCategoryPage ? "Add Task" : "Add Category"}
                </div>
              </div>
            </Button>
            <SettingsBtn />
          </div>
        </div>
      </header>
      <main className="grow bg-background p-2.5">
        <Outlet />
      </main>
      <BaseModal />
    </div>
  );
};

export default PrimaryLayout;
