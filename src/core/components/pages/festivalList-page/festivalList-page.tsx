import { FestivalList } from "../../festivalList/festivalList";
import styles from "./festivalList-page.module.scss";

export default function FestivalListPage() {
  return (
    <>
      <section className={styles.festivallist}>
        <h2 className={styles.festivallist__title}>Festival list</h2>
        <FestivalList></FestivalList>
      </section>
    </>
  );
}
