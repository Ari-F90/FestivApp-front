import styles from "./footer.module.scss";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <address className={styles.footer__address}>
        Powered by FestivApp©
      </address>
    </footer>
  );
}
