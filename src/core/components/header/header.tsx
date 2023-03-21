import { Link } from "react-router-dom";
import styles from "./header.module.scss";

type HeaderProps = { children: JSX.Element };
export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__flex}>
        <div>
          <h1>
            <Link to="/home">
              <img
                src="../../../../img/favicon.png"
                alt="logo-title"
                className={styles.header__logo}
              ></img>
            </Link>
          </h1>
        </div>

        <div>{children}</div>
      </div>
    </header>
  );
}
