/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { useFestivals } from "../../../features/festivals/hooks/use.festivals";
import { Festival } from "../../../features/festivals/models/festival";
import { store } from "../../store/store";
import { FestivalList } from "./festivalList";

jest.mock("../../../features/festivals/hooks/use.festivals");
jest.mock("../card/card");

describe("Given Festival List component", () => {
  beforeEach(async () => {
    (useFestivals as jest.Mock).mockReturnValue({
      festivals: [
        {
          id: "1",
          name: "test1",
        } as Festival,
        {
          id: "2",
          name: "test2",
        } as Festival,
      ],
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

  describe("When the Card is rendered", () => {
    test("Then it should return images", async () => {
      act(async () => {
        const elements = await screen.findAllByRole("img");
        expect(elements[0]).toBeInTheDocument();
        const name = await screen.findByRole("list");
        expect(name).toBeInTheDocument();
      });
    });
  });
});
