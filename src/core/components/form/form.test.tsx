/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useFestivals } from "../../../features/festivals/hooks/use.festivals";
import { FestivalApiRepo } from "../../../features/festivals/services/repository/festival.repo";

import { store } from "../../store/store";
import Form from "./form";

const mockParams = { id: "3" };

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockParams,
}));
jest.mock("../../../features/festivals/hooks/use.festivals");

const mockRepo: FestivalApiRepo = {
  url: "testing",
  loadFestivals: jest.fn(),
  loadOneFestival: jest.fn(),
  createFestival: jest.fn(),
  updateFestival: jest.fn(),
  deleteFestival: jest.fn(),
};
describe("Given the Form component", () => {
  let elements: HTMLElement[];

  describe("When we render the form component", () => {
    beforeEach(async () => {
      (useFestivals as jest.Mock).mockReturnValue({
        festivals: [
          {
            id: "1",
            name: "festival1",
          },
          {
            id: "2",
            name: "festival2",
          },
          {
            id: "3",
            name: "festival3",
          },
        ],

        addFestival: jest.fn(),
        updateFestival: jest.fn(),
      });
      await act(async () => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <Form></Form>
            </MemoryRouter>
          </Provider>
        );
      });
    });
    test("Then the form should appear on the screen", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });

    describe("When the user clicks the submit button and there is an existing festival", () => {
      test("then it calls updateFestival when submitting a festival", async () => {
        elements = await screen.findAllByRole("button");
        await userEvent.click(elements[0]);
        expect(useFestivals(mockRepo).updateFestival).toHaveBeenCalled();
      });
    });
  });
});
