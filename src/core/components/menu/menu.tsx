import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Festival list", path: "/festivals" },
  { label: "My favorites", path: "/favorites" },
];

type MenuProps = {
  options: MenuOption[];
};

export const Menu = ({ options }: MenuProps) => {
  return (
    <nav className={styles.menuburger}>
      <img
        className={styles.burgerImg}
        src="../burger.png"
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
  );
};
