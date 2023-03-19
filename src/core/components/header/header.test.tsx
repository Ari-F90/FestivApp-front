import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Header } from "./header";

describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then it should have two images in the screen", () => {
      render(
        <Provider store={store}>
          <Header>
            <></>
          </Header>
        </Provider>
      );
      const logo1 = screen.getByAltText("logo-title");
      const logo2 = screen.getByAltText("burger-menu");
      expect(logo1).toBeInTheDocument();
      expect(logo2).toBeInTheDocument();
    });
  });
});
