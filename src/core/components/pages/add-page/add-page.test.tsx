import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";

import AddFormPage from "./add-page";

describe("Given Add form page", () => {
  describe("When we render the component", () => {
    test("Then it should display the title", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <AddFormPage />
          </MemoryRouter>
        </Provider>
      );
      const element = screen.getByText("Add a new festival");
      expect(element).toBeInTheDocument();
    });
  });
});
