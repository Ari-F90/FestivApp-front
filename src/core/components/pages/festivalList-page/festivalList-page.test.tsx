import { render } from "@testing-library/react";
import FestivalListPage from "./festivalList-page";

jest.mock("./festivalList-page");
describe("Given the festival list page", () => {
  describe("When it is render", () => {
    test('Then it should render "Festival list"', () => {
      render(
        <>
          <FestivalListPage></FestivalListPage>
        </>
      );
      expect(FestivalListPage).toHaveBeenCalled();
    });
  });
});
