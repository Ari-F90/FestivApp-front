import styles from "./about-page.module.scss";

export default function AboutPage() {
  return (
    <>
      <section className={styles.aboutpage}>
        <h2 className={styles.aboutpage__title}>About us</h2>
        <p className={styles.aboutpage__text}>
          Welcome to our community! Get the chance to visit our app and start
          creating festivals and connect with other people. We are sure you will
          be able to know other music fans with the same music interests.
        </p>
      </section>
    </>
  );
}
