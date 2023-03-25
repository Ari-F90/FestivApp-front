import Register from "../../register/register";
import styles from "./register-page.module.scss";
export default function RegisterPage() {
  return (
    <>
      <section className={styles.registerpage}>
        <h2 className={styles.registerpage__title}>Register</h2>
        <Register></Register>
      </section>
    </>
  );
}
