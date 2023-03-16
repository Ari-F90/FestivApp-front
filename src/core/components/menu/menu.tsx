import { Link } from "react-router-dom";

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
    <>
      <nav className="menu_burger">
        <div className="menu__hover">
          <img
            className="logos__logo3"
            src="../img/burger.png"
            alt="Burger logo"
          />
          D
          <ul className="menu_paths">
            {options.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="menu-item">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
