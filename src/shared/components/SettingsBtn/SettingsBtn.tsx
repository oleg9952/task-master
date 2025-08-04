import { FiSettings } from "react-icons/fi";

const SettingsBtn = () => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="w-[40px] h-[40px] rounded-full cursor-pointer flex justify-center items-center"
    >
      <FiSettings
        size={35}
        className="text-button-primary hover:opacity-85 transition-colors duration-200"
      />
    </div>
  );
};

export default SettingsBtn;
