import Form from "../../form/form";
import styles from "./edit-page.module.scss";

export default function EditFormPage() {
  return (
    <>
      <section className={styles.editform}>
        <h2 className={styles.editform__title}>Update a festival</h2>
        <Form></Form>
      </section>
    </>
  );
}
