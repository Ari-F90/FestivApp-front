/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { MemoryRouter, MemoryRouter as Router } from "react-router-dom";
import { Festival } from "../../../features/festivals/models/festival";
import { festivalReducer } from "../../../features/festivals/reducer/festivals.reducer";
import { store } from "../../store/store";
import { Card } from "../card/card";
import { FestivalList } from "./festivalList";

const mockFestivals = {
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
};

loadFestivals: jest.fn();
describe("Given Festival List component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FestivalList></FestivalList>
      </Provider>
    );
  });

  describe("When we render a card", () => {
    test("Then it should appear in the document", async () => {
      await act(async () => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <Card
                key={mockFestivals.festivals[0].id}
                festival={mockFestivals.festivals[0]}
              ></Card>
            </MemoryRouter>
          </Provider>
        );
      });

      const name = await screen.findByText("test1");
      expect(name).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should be return images", async () => {
      act(async () => {
        const elements = await screen.findAllByRole("img");
        expect(elements[0]).toBeInTheDocument();
      });
    });
  });
});
