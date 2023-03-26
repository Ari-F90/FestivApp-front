import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { useUsers } from "../../../features/users/hooks/use.users";
import { UserApiRepo } from "../../../features/users/services/user.api.repo";
import styles from "./logout.module.scss";
export default function Logout() {
  const repo = useMemo(() => new UserApiRepo(), []);

  const { logoutUser } = useUsers(repo);

  return (
    <button className={styles.logout} onClick={logoutUser}>
      <img
        className={styles.imglogout}
        src="../../../../img/logout.png"
        alt="logout"
      ></img>
    </button>
  );
}
