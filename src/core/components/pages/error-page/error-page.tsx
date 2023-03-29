import styles from "./error-page.module.scss";

export default function ErrorFormPage() {
  return (
    <>
      <section className={styles.errorpage}>
        <h2 className={styles.errorpage__title}>Sorry, page not found</h2>
        <div className={styles.errorpage__container}>
          <div>
            <img
              src="../../../../img/favicon.png"
              className={styles.errorimg}
              alt="not found"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
