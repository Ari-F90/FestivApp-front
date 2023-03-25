import Login from "../../login/login";
import styles from "./login-page.module.scss";
export default function LoginPage() {
  return (
    <>
      <section className={styles.loginpage}>
        <h2 className={styles.loginpage__title}>Login</h2>
        <Login></Login>
      </section>
    </>
  );
}
