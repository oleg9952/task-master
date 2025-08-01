import { NavLink, Outlet } from "react-router";
import { Paths } from "../../../pages";

const PrimaryLayout = () => {
  return (
    <div>
      <header className="border-2 border-black">
        <NavLink
          className="text-blue-500 hover:underline dark:text-red-400"
          to={Paths.profile}
        >
          Profile
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PrimaryLayout;
