/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from "@testing-library/react";

import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useFestivals } from "../../../features/festivals/hooks/use.festivals";

import { store } from "../../store/store";

import Details from "./details";

jest.mock("../../../features/festivals/hooks/use.festivals");

describe("Given Details page component", () => {
  beforeEach(async () => {
    (useFestivals as jest.Mock).mockReturnValue({
      festivals: [
        {
          id: "1",
          name: "festival1",
        },
        {
          id: "1",
          name: "festival2",
        },
      ],
      loadOneFestival: jest.fn(),
    });

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
});
