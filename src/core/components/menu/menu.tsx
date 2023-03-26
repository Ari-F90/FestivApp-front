import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../../features/users/hooks/use.users";
import { UserApiRepo } from "../../../features/users/services/user.api.repo";
import Logout from "../logout/logout";
import styles from "./menu.module.scss";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Festival list", path: "/festivals" },
];

type MenuProps = {
  options: MenuOption[];
};

export const Menu = ({ options }: MenuProps) => {
  const repo = useMemo(() => new UserApiRepo(), []);
  const { users } = useUsers(repo);

  const isLogging: boolean =
    users.userLogged.email !== undefined ? true : false;
  return (
    <>
      <div className={styles.menucontainer}>
        {isLogging ? (
          <>
            <div>
              <Logout></Logout>
            </div>
            <p className={styles.welcome}>Welcome {users.userLogged.name}!</p>
          </>
        ) : (
          <>
            <p className={styles.welcome}>Welcome festival fan!</p>
          </>
        )}
        <div>
          <nav className={styles.menuburger}>
            <img
              className={styles.burgerImg}
              src="../img/burger.png"
              alt="Burger menu logo"
            ></img>
            <ul className={styles.menupaths}>
              {options.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="menu-item">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
