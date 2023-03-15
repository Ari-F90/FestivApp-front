import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { ProtoUser } from "../models/user";
import * as ac from "../reducer/users.actions.creator";
import { UserApiRepo } from "../services/user.api.repo";

export function useUsers(repo: UserApiRepo) {
  const users = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch<AppDispatch>();

  const registerUser = async (info: ProtoUser) => {
    try {
      const newUser = await repo.register(info);
      dispatch(ac.addCreator(newUser.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const loginUser = async (info: ProtoUser) => {
    try {
      const newUser = await repo.login(info);
      dispatch(ac.addCreator(newUser.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    users,
    registerUser,
    loginUser,
  };
}
