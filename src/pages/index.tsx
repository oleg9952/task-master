import { Route, Routes } from "react-router";
import { Home } from "./Home";
import { Category } from "./Category";
import { Profile } from "./Profile";
import { PrimaryLayout } from "../shared/layouts/PrimaryLayout";

export const Paths = {
  home: "/",
  category: "/category/:category",
  profile: "/profile",
} as const;

export const Router = () => (
  <Routes>
    <Route element={<PrimaryLayout />}>
      <Route path={Paths.home} element={<Home />} />
      <Route path={Paths.category} element={<Category />} />
      <Route path={Paths.profile} element={<Profile />} />
    </Route>
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);
