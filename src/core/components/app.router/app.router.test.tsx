import { render, screen } from "@testing-library/react";
import { AppRouter } from "./app.router";
import { MemoryRouter as Router } from "react-router-dom";
import { MenuOption } from "../menu/menu";
import { store } from "../../store/store";
import { Provider } from "react-redux";

const mockOptions: MenuOption[] = [
  {
    label: "Home",
    path: "/home",
  },
];

const mockRoutesOptions: MenuOption[] = [
  {
    label: "Register",
    path: "/register",
  },
  {
    label: "Login",
    path: "/login",
  },
];

describe("Given AppRouter", () => {
  describe("When the route is home", () => {
    test("Then we should navigate to home", async () => {
      render(
        <Provider store={store}>
          <Router initialEntries={["/home"]} initialIndex={0}>
            <AppRouter
              menuOptions={mockOptions}
              routesOptions={mockRoutesOptions}
            ></AppRouter>
          </Router>
        </Provider>
      );
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
  /* describe("When the route is about", () => {
    test("Then we should navigate to about", async () => {
      render(
        <Router initialEntries={["/about", "/otra"]} initialIndex={0}>
          <AppRouter
            menuOptions={mockOptions}
            routesOptions={mockRoutesOptions}
          ></AppRouter>
        </Router>
      );
      const element = await screen.findByText(/Welcome/i);
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the route is festivals", () => {
    test("Then we should navigate to festivals", async () => {
      render(
        <Router initialEntries={["/festivals", "/otra"]} initialIndex={0}>
          <AppRouter
            menuOptions={mockOptions}
            routesOptions={mockRoutesOptions}
          ></AppRouter>
        </Router>
      );
      const element = await screen.findByText(/Festivals/i);
      expect(element).toBeInTheDocument();
    });*/
  describe("When the route is register page", () => {
    test("Then we should navigate to register", async () => {
      render(
        <Provider store={store}>
          <Router initialEntries={["/register"]} initialIndex={0}>
            <AppRouter
              menuOptions={mockOptions}
              routesOptions={mockRoutesOptions}
            ></AppRouter>
          </Router>
        </Provider>
      );
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the route is login page", () => {
    test("Then we should navigate to login", async () => {
      render(
        <Provider store={store}>
          <Router initialEntries={["/login"]} initialIndex={1}>
            <AppRouter
              menuOptions={mockOptions}
              routesOptions={mockRoutesOptions}
            ></AppRouter>
          </Router>
        </Provider>
      );
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
