import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import { Festival } from "../../../features/festivals/models/festival";

type CardProps = {
  festival: Festival;
};

export function Card({ festival }: CardProps) {
  return (
    <div>
      <li className={styles.card}>
        <div className={styles.card__element}>
          <Link to={`/details/${festival.id}`} relative="path">
            <img
              className={styles.card__image}
              src={festival.image}
              alt="character's icon"
            ></img>
          </Link>
        </div>
        <div className={styles.card__properties}>
          <div className={styles.card__properties__name}>
            <span>{festival.name}</span>
          </div>
          <div className={styles.card__properties__dates}>
            <span>{festival.dates}</span>
          </div>
        </div>
      </li>
    </div>
  );
}
