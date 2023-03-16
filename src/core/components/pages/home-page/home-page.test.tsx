import { render } from "@testing-library/react";
import HomePage from "./home-page";

jest.mock("./home-page");
describe("Given the home page", () => {
  describe("When it is render", () => {
    test('Then it should render "Home Page"', () => {
      render(
        <>
          <HomePage></HomePage>
        </>
      );
      expect(HomePage).toHaveBeenCalled();
    });
  });
});
