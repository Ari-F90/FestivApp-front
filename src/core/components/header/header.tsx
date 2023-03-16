import styles from "./header.module.scss";

type HeaderProps = { children: JSX.Element };
export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>FestivApp</h1>
    </header>
  );
}
