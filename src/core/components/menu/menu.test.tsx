import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Menu, MenuOption } from "./menu";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../../features/users/reducer/users.slice";
import { useUsers } from "../../../features/users/hooks/use.users";

jest.mock("../../../features/users/hooks/use.users");
const mockStore = configureStore({
  reducer: { users: userReducer },
});
describe("Given Menu component", () => {
  beforeEach(() => {
    (useUsers as jest.Mock).mockReturnValue({
      logoutUser: jest.fn(),
      users: {
        userLogged: {
          email: "test",
        },
      },
    });
  });
  describe("When it is rendered", () => {
    test("Then menu should be in the screen", () => {
      const mockOptions: MenuOption[] = [
        {
          label: "Home",
          path: "/home",
        },
      ];
      render(
        <Provider store={mockStore}>
          <Router>
            <Menu options={mockOptions}></Menu>
          </Router>
        </Provider>
      );
      const element = screen.getByText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
