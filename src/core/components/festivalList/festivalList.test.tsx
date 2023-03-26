/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { useFestivals } from "../../../features/festivals/hooks/use.festivals";
import { Festival } from "../../../features/festivals/models/festival";

import { FestivalApiRepo } from "../../../features/festivals/services/repository/festival.repo";
import { store } from "../../store/store";
import { FestivalList } from "./festivalList";

jest.mock("../../../features/festivals/hooks/use.festivals");
jest.mock("../card/card");

const mockRepo = {
  url: "testing",
  loadFestivals: jest.fn(),
  loadOneFestival: jest.fn(),
  createFestival: jest.fn(),
  updateFestival: jest.fn(),
  deleteFestival: jest.fn(),
  loadByMusic: jest.fn(),
} as unknown as FestivalApiRepo;
describe("Given Festival List component", () => {
  beforeEach(async () => {
    (useFestivals as jest.Mock).mockReturnValue({
      festivals: [
        {
          id: "1",
          name: "test1",
          musicType: "rock",
        } as Festival,
        {
          id: "2",
          name: "test2",
          musicType: "indie",
        } as Festival,
      ],
      loadFestivals: jest.fn(),
      loadByMusic: jest.fn(),
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <FestivalList></FestivalList>
          </MemoryRouter>
        </Provider>
      );
    });
  });

  describe("When the Festival list component is rendered", () => {
    test("Then it should appear the 'previous page' button", async () => {
      await act(async () => {
        const buttons = await screen.findAllByRole("button");
        expect(buttons[1]).toBeInTheDocument();
        await userEvent.click(buttons[1]);
        expect(useFestivals(mockRepo).loadFestivals).toHaveBeenCalled();
      });
    });
    test("Then it should appear the 'next page' button", async () => {
      await act(async () => {
        const buttons = await screen.findAllByRole("button");
        expect(buttons[1]).toBeInTheDocument();
        await userEvent.click(buttons[2]);
        expect(useFestivals(mockRepo).loadFestivals).toHaveBeenCalled();
      });
    });
  });
  describe("When the Festival list component appears in the screen", () => {
    test("Then it should appear the festivals with the selected type of music", async () => {
      await act(async () => {
        const select = screen.getByRole("combobox");
        fireEvent.change(select, { target: { value: "rock" } });
        expect(useFestivals(mockRepo).loadByMusic).toHaveBeenCalledWith("rock");
      });
    });
  });
});
