import { render } from "@testing-library/react";
import FavoritesPage from "./favorites-page";

jest.mock("./favorites-page");
describe("Given the Favorites page", () => {
  describe("When it is render", () => {
    test('Then it should render "My favorites"', () => {
      render(
        <>
          <FavoritesPage></FavoritesPage>
        </>
      );
      expect(FavoritesPage).toHaveBeenCalled();
    });
  });
});
