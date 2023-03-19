import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { User } from "../models/user";

import { login, register } from "../reducer/users.slice";
import { UserApiRepo } from "../services/user.api.repo";

export function useUsers(repo: UserApiRepo) {
  const users = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch<AppDispatch>();

  const registerUser = async (info: Partial<User>) => {
    try {
      const newUser = await repo.register(info);
      dispatch(register(newUser.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const loginUser = async (info: Partial<User>) => {
    try {
      const newUser = await repo.login(info);
      dispatch(login(newUser.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  return {
    users,
    registerUser,
    loginUser,
  };
}
