import Form from "../../form/form";
import styles from "./add-page.module.scss";

export default function AddFormPage() {
  return (
    <>
      <section className={styles.addform}>
        <h2 className={styles.addform__title}>Add a new festival</h2>
        <Form></Form>
      </section>
    </>
  );
}
