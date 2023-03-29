import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../store/store";

import ErrorFormPage from "./error-page";

describe("Given Error form page", () => {
  describe("When we render the component", () => {
    test("Then it should display the title", () => {
      render(
        <Provider store={store}>
          <ErrorFormPage />
        </Provider>
      );
    });
  });
});
