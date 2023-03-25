/* eslint-disable testing-library/no-wait-for-side-effects */
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { AppRouter } from "./app.router";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Given AppRouter", () => {
  const renderAppRouter = (number: number) => {
    render(
      <Provider store={store}>
        <Router
          initialEntries={[
            "/home",
            "/about",
            "/festivals",
            "/register-page",
            "/login-page",
            "/details/:id",
            "/add",
            "/edit/:id",
          ]}
          initialIndex={number}
        >
          <AppRouter></AppRouter>
        </Router>
      </Provider>
    );
  };
  describe("When rendering and the path is '/home'", () => {
    test("Then it should be titles in the screen", async () => {
      await waitFor(async () => renderAppRouter(0));
      const elements = await screen.findAllByRole("heading");
      expect(elements[0]).toBeInTheDocument();
    });
  });

  describe("When rendering and the path is '/about'", () => {
    test("Then, the title 'About us' should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(1));
      const element = await screen.findByRole("heading", {
        name: "About us",
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe("When rendering and the path is '/festivals'", () => {
    test("Then, the title 'Festival list' should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(2));
      const element = await screen.findByRole("heading", {
        name: "Festival list",
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe("When rendering and the path is '/register-page'", () => {
    test("Then, the title 'Register' from Home should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(3));
      const element = await screen.findByRole("heading", {
        name: "Register",
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe("When rendering and the path is '/login-page'", () => {
    test("Then, the title 'Login' from Home should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(4));
      const element = await screen.findByRole("heading", {
        name: "Login",
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe("When rendering and the path is '/details/:id'", () => {
    test("Then, the title 'Details' from Home should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(5));
      const element = await screen.findByRole("heading", {
        name: "Details",
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe("When rendering and the path is '/add'", () => {
    test("Then, the title 'Add a new festival' from Home should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(6));
      const element = await screen.findByRole("heading", {
        name: "Add a new festival",
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe("When rendering and the path is '/edit/:id'", () => {
    test("Then, the title 'Update a festival' from Home should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(7));
    });
  });
});
