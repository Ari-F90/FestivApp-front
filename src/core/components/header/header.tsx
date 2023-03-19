import styles from "./header.module.scss";

type HeaderProps = { children: JSX.Element };
export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__flex}>
        <div>
          <h1>
            <img
              src="../../../../favicon.png"
              alt="logo-title"
              className={styles.header__logo}
            ></img>
          </h1>
        </div>
        <div>
          <img
            src="../../../../burger.png"
            alt="burger-menu"
            className={styles.header__burger}
          ></img>
        </div>
      </div>
    </header>
  );
}
