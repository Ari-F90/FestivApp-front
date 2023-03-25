import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { MenuOption, menuOptions } from "../menu/menu";

const HomePage = lazy(() => import("../pages/home-page/home-page"));
const AboutPage = lazy(() => import("../pages/about-page/about-page"));
const FestivalListPage = lazy(
  () => import("../pages/festivalList-page/festivalList-page")
);

const RegisterPage = lazy(() => import("../pages/register-page/register-page"));
const LoginPage = lazy(() => import("../pages/login-page/login-page"));
const Details = lazy(() => import("../../../core/components/details/details"));
const AddFormPage = lazy(() => import("../pages/add-page/add-page"));
const EditFormPage = lazy(() => import("../pages/edit-page/edit-page"));

export const routesOptions: MenuOption[] = [
  { label: "Register", path: "/register-page" },
  { label: "Login", path: "/login-page" },
  { label: "Details", path: "/details/:id" },
  { label: "Add", path: "/add" },
  { label: "Edit", path: "/edit/:id" },
];

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<HomePage></HomePage>}></Route>
        <Route
          path={menuOptions[0].path}
          element={<HomePage></HomePage>}
        ></Route>
        <Route
          path={menuOptions[1].path}
          element={<AboutPage></AboutPage>}
        ></Route>
        <Route
          path={menuOptions[2].path}
          element={<FestivalListPage></FestivalListPage>}
        ></Route>

        <Route
          path={routesOptions[0].path}
          element={<RegisterPage></RegisterPage>}
        ></Route>
        <Route
          path={routesOptions[1].path}
          element={<LoginPage></LoginPage>}
        ></Route>
        <Route
          path={routesOptions[2].path}
          element={<Details></Details>}
        ></Route>
        <Route
          path={routesOptions[3].path}
          element={<AddFormPage></AddFormPage>}
        ></Route>
        <Route
          path={routesOptions[4].path}
          element={<EditFormPage></EditFormPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
