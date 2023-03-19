import styles from "./about-page.module.scss";

export default function AboutPage() {
  return (
    <>
      <h2 className={styles.about__title}>About us</h2>
      <p>
        Welcome to our community! Get the chance to visit our app and start
        creating festivals and connect with other people. We are sure you will
        be able to know other music fans with the same music interests.
      </p>
    </>
  );
}
