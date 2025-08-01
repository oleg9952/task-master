import { NavLink, Outlet } from "react-router";
import { Paths } from "../../../pages";

const PrimaryLayout = () => {
  return (
    <div>
      <header>
        <NavLink to={Paths.profile}>Profile</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PrimaryLayout;
