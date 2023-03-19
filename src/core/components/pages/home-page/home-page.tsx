import { Link } from "react-router-dom";
import styles from "./home-page.module.scss";
export default function HomePage() {
  return (
    <section className={styles.homepage}>
      <div className={styles.homepage__image}>
        <h2 className={styles.homepage__title1}>Find your plan.</h2>
        <h2 className={styles.homepage__title2}> Get ready</h2>
      </div>
      <div className={styles.homepage__buttons}>
        <Link to={"/register"}>
          <button
            className={styles.homepage__buttons__registerhome}
            type="button"
          >
            REGISTER
          </button>
        </Link>

        <Link to={"/login"}>
          <button className={styles.homepage__buttons__loginhome} type="button">
            LOGIN
          </button>
        </Link>
      </div>
    </section>
  );
}
