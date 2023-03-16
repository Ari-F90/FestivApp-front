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
          initialEntries={["/home", "/register", "/login"]}
          initialIndex={number}
        >
          <AppRouter></AppRouter>
        </Router>
      </Provider>
    );
  };
  describe("When rendering and the path is '/home'", () => {
    test("Then, the title 'Find your plan.Get ready' should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(0));
      const element = await screen.findByRole("heading", {
        name: "Find your plan. Get ready",
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe("When rendering and the path is '/register'", () => {
    test("Then, the title 'register' from Home should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(1));
      const element = await screen.findByRole("heading", {
        name: "Register",
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe("When rendering and the path is '/login'", () => {
    test("Then, the title 'Login' from Home should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(2));
      const element = await screen.findByRole("heading", {
        name: "Login",
      });
      expect(element).toBeInTheDocument();
    });
  });
});
