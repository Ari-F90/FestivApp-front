/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from "@testing-library/react";

import { User } from "../models/user";
import { useUsers } from "./use.users";
import { UserApiRepo } from "../services/user.api.repo";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import { register, State, userReducer } from "../reducer/users.slice";

let mockRepo: UserApiRepo = {
  register: jest.fn(),
  login: jest.fn(),
} as unknown as UserApiRepo;

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => ({ navigate: jest.fn().mockImplementation(() => ({})) }),
}));

let mockUser: User = {
  username: "test",
  email: "test@",
} as unknown as User;

let users;
let initialState = {
  users: [{ email: "test@", name: "test1" }],
} as unknown as State;
const registerAction = register(mockUser);

const mockStore = configureStore({
  reducer: { users: userReducer },
  preloadedState: {},
});

describe("Given the useUsers Hook", () => {
  beforeEach(async () => {
    const TestComponent = function () {
      const { registerUser, loginUser, logoutUser } = useUsers(mockRepo);

      return (
        <>
          <button onClick={() => registerUser(mockUser)}>register</button>
          <button onClick={() => loginUser(mockUser)}>login</button>
          <button onClick={() => logoutUser()}>logout</button>
        </>
      );
    };

    await act(async () =>
      render(
        <Provider store={mockStore}>
          <MemoryRouter>
            <TestComponent></TestComponent>
          </MemoryRouter>
        </Provider>
      )
    );
  });

  describe("When the TestComponent is rendered", () => {
    test("Then the register button should be in the document", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements[0]).toBeInTheDocument();
    });
  });

  describe("When the register button is clicked", () => {
    test("Then the registerUser function should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await fireEvent.click(elements[0]);
      expect(mockRepo.register).toHaveBeenCalled();
    });
  });

  describe("When the login button is clicked", () => {
    test("Then, the loginUser function should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await fireEvent.click(elements[1]);
      expect(mockRepo.login).toHaveBeenCalled();
    });
  });
  describe("When the logout button is clicked", () => {
    test("Then, the logoutUser function should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await fireEvent.click(elements[2]);
    });
  });
});
