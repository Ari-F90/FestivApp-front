import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./app";
import { store } from "../store/store";
import { Header } from "../components/header/header";
import { AppRouter } from "../components/app.router/app.router";
import { Footer } from "../components/footer/footer";

jest.mock("../components/header/header");
jest.mock("../components/app.router/app.router");
jest.mock("../components/footer/footer");
describe("Given the app component", () => {
  describe("When it is rendered", () => {
    test("renders learn react link", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(Header).toHaveBeenCalled();
      expect(AppRouter).toHaveBeenCalled();
      expect(Footer).toHaveBeenCalled();
    });
  });
});
