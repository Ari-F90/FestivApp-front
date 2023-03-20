import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useFestivals } from "../../../features/festivals/hooks/use.festivals";
import { Festival } from "../../../features/festivals/models/festival";
import { FestivalApiRepo } from "../../../features/festivals/services/festival.repo";
import styles from "./details.module.scss";

export type CardProps = {
  festival: Festival;
};

export default function Details() {
  const { id } = useParams();
  const repo = useMemo(() => new FestivalApiRepo(), []);
  const { festivals } = useFestivals(repo);

  const festivalDetails = festivals.find((item) => item.id === id);
  return (
    <>
      <div className={styles.details}>
        <h2 className={styles.details__title}>Details</h2>
        <span className={styles.details__row}>
          <span className={styles.details__card}>
            <div className={styles.details__imgcontainer}>
              <img
                src={festivalDetails?.image}
                alt="Details card"
                className={styles.details__image}
              />
            </div>
            <ul className={styles.card__details}>
              <li>{festivalDetails?.name}</li>
              <li>Type of music: {festivalDetails?.musicType}</li>
              <li>City: {festivalDetails?.city}</li>
              <li>Country: {festivalDetails?.country}</li>
              <li>Dates: {festivalDetails?.dates}</li>
              <li>Capacity: {festivalDetails?.capacity} people</li>
              <li>Created by: {festivalDetails?.owner.name}</li>
            </ul>
          </span>
        </span>
        <div className={styles.button_container}>
          <div className={styles.button_container_flex}>
            <Link to={"/festivals"}>
              <button className={styles.button_top}>BACK TO FESTIVALS</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
