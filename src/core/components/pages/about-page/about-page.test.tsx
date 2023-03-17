import { render } from "@testing-library/react";
import AboutPage from "./about-page";

jest.mock("./about-page");
describe("Given the home page", () => {
  describe("When it is render", () => {
    test('Then it should render "Home Page"', () => {
      render(
        <>
          <AboutPage></AboutPage>
        </>
      );
      expect(AboutPage).toHaveBeenCalled();
    });
  });
});
