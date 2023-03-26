import { render, screen, fireEvent } from "@testing-library/react";

import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import Login from "./login";

describe("Given the Login component", () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login></Login>
        </MemoryRouter>
      </Provider>
    );

    elements = [screen.getByRole("button"), ...screen.getAllByRole("textbox")];
  });

  describe("When the user click in the login button", () => {
    test("Then data should be submitted", async () => {
      await fireEvent.click(elements[0]);
    });
  });

  describe("When it is render", () => {
    test("Then it should be in the document one button and 2 inputs", () => {
      expect(elements[0]).toBeInTheDocument();
      expect(elements.length).toBe(2);
    });
  });
});
