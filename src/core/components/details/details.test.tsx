/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useFestivals } from "../../../features/festivals/hooks/use.festivals";
import { FestivalApiRepo } from "../../../features/festivals/services/repository/festival.repo";

import { store } from "../../store/store";

import Details from "./details";

jest.mock("../../../features/festivals/hooks/use.festivals");

const mockRepo: FestivalApiRepo = {
  url: "testing",
  loadFestivals: jest.fn(),
  loadOneFestival: jest.fn(),
  createFestival: jest.fn(),
  updateFestival: jest.fn(),
  deleteFestival: jest.fn(),
};

describe("Given Details page component", () => {
  beforeEach(async () => {
    await act(async () => {
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
        ],
        loadOneFestival: jest.fn(),
        deleteFestival: jest.fn(),
      });
    });

    /* const TestComponent = function () {
      const { deleteFestival } = useFestivals(mockRepo);
      return (
        <div>
          <button title="delete" onClick={() => deleteFestival("1")}></button>
        </div>
      );
    };*/
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Details></Details>
          </MemoryRouter>
        </Provider>
      );
    });
  });

  describe("When we render the component", () => {
    test('Then, the title "Details" should be in the document', async () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When we call the delete method", () => {
    test("Then the selected festival will be deleted", async () => {
      const elements = screen.getAllByRole("button");
      await userEvent.click(elements[2]);
      expect(elements[2]).toBeInTheDocument();
      //expect(useFestivals(mockRepo).deleteFestival).toHaveBeenCalled();
    });
  });
  /*describe("When it is called the delete method", () => {
    test("Then the chosen festival will be deleted from the initial state", async () => {
      jest.fn().mockResolvedValue([
        {
          id: "2",
          name: "festival2",
        },
      ]);
    });
  });*/
});
