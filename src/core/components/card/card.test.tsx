import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { Festival } from "../../../features/festivals/models/festival";
import { store } from "../../store/store";
import { Card } from "./card";

const mockFestival: Festival = {
  name: "string",
  imageUrl: "string",
} as unknown as Festival;

describe("Given a Card Festival component", () => {
  describe("when it is rendered", () => {
    render(
      <Provider store={store}>
        <Router>
          <Card festival={mockFestival}></Card>
        </Router>
      </Provider>
    );
    test("Then the festival's name should be in the document", () => {
      const element1 = screen.getByText(mockFestival.name);
      expect(element1).toBeInTheDocument();
    });
  });
});
