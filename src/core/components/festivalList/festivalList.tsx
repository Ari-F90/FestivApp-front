import { useEffect, useMemo } from "react";

import { Link } from "react-router-dom";

import { useFestivals } from "../../../features/festivals/hooks/use.festivals";
import { Festival } from "../../../features/festivals/models/festival";
import { FestivalApiRepo } from "../../../features/festivals/services/repository/festival.repo";
import { useUsers } from "../../../features/users/hooks/use.users";
import { UserApiRepo } from "../../../features/users/services/user.api.repo";

import { Card } from "../card/card";
import styles from "./festivalList.module.scss";

export function FestivalList() {
  const repo = useMemo(() => new FestivalApiRepo(), []);
  const { festivals, loadFestivals, loadByMusic } = useFestivals(repo);

  const repoUser = useMemo(() => new UserApiRepo(), []);
  const { users } = useUsers(repoUser);
  const isLogging: boolean =
    users.userLogged.email !== undefined ? true : false;

  useEffect(() => {
    loadFestivals();
  }, [loadFestivals]);

  const setPage = (pageChange: number) => loadFestivals(pageChange);
  return (
    <>
      <div className={styles.festivals_flex}>
        <div>
          <select
            className={styles.festival_filter}
            onChange={async (element) => {
              const musicFiltered = element.target.value;
              musicFiltered === "All festivals"
                ? loadFestivals()
                : loadByMusic(musicFiltered);
            }}
          >
            <option value="All festivals">All festivals</option>
            <option value="indie">Indie</option>
            <option value="rock">Rock</option>
            <option value="heavy metal">Heavy metal</option>
            <option value="pop">Pop</option>
            <option value="electronic">Electronic</option>
          </select>
        </div>
        {isLogging ? (
          <div className={styles.festivals_black}>
            <Link to={"/add"}>
              <button className={styles.addbutton}>
                <span>
                  <img
                    src="../../../../../../img/addbutton.png"
                    alt="addbutton"
                  ></img>
                </span>
              </button>
            </Link>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <div className={styles.festivals}>
        {festivals.map((item: Festival) => (
          <Card festival={item} key={item.id}></Card>
        ))}
      </div>
      <div className={styles.containerbuttons}>
        <div className={styles.prev}>
          <button className={styles.prevbutton} onClick={() => setPage(-1)}>
            <img src="../../../../img/prev.png" alt="prev-page"></img>
          </button>
        </div>
        <div className={styles.next}>
          <button className={styles.nextbutton} onClick={() => setPage(+1)}>
            <img src="../../../../img/next.png" alt="next-page"></img>
          </button>
        </div>
      </div>
    </>
  );
}
