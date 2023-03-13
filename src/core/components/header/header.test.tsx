import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { Header } from "./header";

describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then it should have the title in the screen", () => {
      render(
        <>
          <Provider store={store}>
            <Header></Header>
          </Provider>
        </>
      );
      const element = screen.getByText(/FestivApp/i);
      expect(element).toBeInTheDocument();
    });
  });
});
