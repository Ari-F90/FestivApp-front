import { useMemo } from "react";

import { useFestivals } from "../../../features/festivals/hooks/use.festivals";
import { Festival } from "../../../features/festivals/models/festival";
import { FestivalApiRepo } from "../../../features/festivals/services/festival.repo";
import { Card } from "../card/card";
import styles from "./festivalList.module.scss";

export function FestivalList() {
  const repo = useMemo(() => new FestivalApiRepo(), []);
  const { festivals } = useFestivals(repo);
  return (
    <>
      <div className={styles.festivals}>
        {festivals.map((item: Festival) => (
          <Card festival={item} key={item.id}></Card>
        ))}
      </div>
    </>
  );
}
