import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";

import LoginPage from "./login-page";

jest.mock("./login-page");

describe("Given the login page", () => {
  describe("When it is render", () => {
    test('Then it should render "Login Page"', () => {
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <LoginPage></LoginPage>
            </MemoryRouter>
          </Provider>
        </>
      );
      expect(LoginPage).toHaveBeenCalled();
    });
  });
});
