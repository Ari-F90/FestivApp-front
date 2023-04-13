/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "../../../core/store/store";
import { User } from "../models/user";

import { login, register, logout } from "../reducer/users.slice";
import { UserApiRepo } from "../services/user.api.repo";

export function useUsers(repo: UserApiRepo) {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch<AppDispatch>();

  const registerUser = async (info: Partial<User>) => {
    try {
      const newUser = await repo.register(info);
      navigate("/login-page");
      dispatch(register(newUser.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const loginUser = async (info: Partial<User>) => {
    try {
      const newUser = await repo.login(info);
      navigate("/festivals");
      dispatch(login(newUser.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const logoutUser = () => {
    try {
      dispatch(logout());
      localStorage.removeItem("token");
      navigate("/home");
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    users,
    registerUser,
    loginUser,
    logoutUser,
  };
}
