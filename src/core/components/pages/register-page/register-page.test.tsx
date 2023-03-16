import { render } from "@testing-library/react";
import RegisterPage from "./register-page";

jest.mock("./register-page");
describe("Given the register page", () => {
  describe("When it is render", () => {
    test('Then it should render "<Register Page"', () => {
      render(
        <>
          <RegisterPage></RegisterPage>
        </>
      );
      expect(RegisterPage).toHaveBeenCalled();
    });
  });
});
