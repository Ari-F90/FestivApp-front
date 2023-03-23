import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";

import EditFormPage from "./edit-page";

describe("Given Edit form page", () => {
  describe("When we render the component", () => {
    test("Then it should display the title", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <EditFormPage />
          </MemoryRouter>
        </Provider>
      );
    });
  });
});
