import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import { Header } from "./header";

describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then it should have an image in the screen", () => {
      render(
        <Provider store={store}>
          <Router>
            <Header>
              <></>
            </Header>
          </Router>
        </Provider>
      );
      const logo1 = screen.getByAltText("logo-title");
      expect(logo1).toBeInTheDocument();
    });
  });
});
