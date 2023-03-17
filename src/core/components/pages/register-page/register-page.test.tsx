import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";
import RegisterPage from "./register-page";

describe("Given Register page", () => {
  describe("When we render the component", () => {
    test("Then it should display the title", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <RegisterPage />
          </MemoryRouter>
        </Provider>
      );
      const element = screen.getByText("REGISTER");
      expect(element).toBeInTheDocument();
    });
  });
});
