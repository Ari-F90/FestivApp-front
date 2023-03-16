import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { MenuOption } from "../menu/menu";

const HomePage = lazy(() => import("../pages/home-page/home-page"));
const RegisterPage = lazy(() => import("../../components/register/register"));
const LoginPage = lazy(() => import("../../components/login/login"));

export type AppRouterProps = {
  menuOptions: MenuOption[];
  routesOptions: MenuOption[];
};

export const routesOptions: MenuOption[] = [
  { label: "Register", path: "/register" },
  { label: "Login", path: "/login" },
];

export function AppRouter({ menuOptions, routesOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<HomePage></HomePage>}></Route>
        <Route
          path={menuOptions[0].path}
          element={<HomePage></HomePage>}
        ></Route>
        {/*<Route path={menuOptions[1].path} element={<About></About>}></Route>}
        <Route
          path={menuOptions[2].path}
          element={<Characters></Characters>}
        ></Route>

        {<Route path={menuOptions[2].path} element={<Favorites></Favorites>}></Route> */}
        <Route
          path={routesOptions[0].path}
          element={<RegisterPage></RegisterPage>}
        ></Route>
        <Route
          path={routesOptions[1].path}
          element={<LoginPage></LoginPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
