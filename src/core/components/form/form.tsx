import { useMemo, SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useFestivals } from "../../../features/festivals/hooks/use.festivals";
import { Festival } from "../../../features/festivals/models/festival";

import { FestivalApiRepo } from "../../../features/festivals/services/repository/festival.repo";

import styles from "./form.module.scss";
export default function Form() {
  const navigate = useNavigate();
  const { id } = useParams();
  const repo = useMemo(() => new FestivalApiRepo(), []);

  const { festivals, addFestival, updateFestival } = useFestivals(repo);

  let festivalItem: Partial<Festival> | undefined = festivals.find(
    (item) => item.id === id
  );
  const type = festivalItem === undefined ? "add" : "";

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;

    const newFestival: Partial<Festival> | undefined = {
      name: (formData.elements[0] as HTMLFormElement).value,
      musicType: (formData.elements[2] as HTMLFormElement).value,
      city: (formData.elements[3] as HTMLFormElement).value,
      country: (formData.elements[4] as HTMLFormElement).value,
      dates: (formData.elements[5] as HTMLFormElement).value,
      capacity: (formData.elements[6] as HTMLFormElement).value,
    };

    const image = (formData.elements[1] as HTMLFormElement).files?.item(0);

    if (type === "add") {
      addFestival(newFestival, image);
    } else {
      newFestival.id = festivalItem!.id;
      updateFestival(newFestival, image, festivalItem!.image);
      navigate(`/details/${festivalItem!.id}`);
    }

    formData.reset();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.formcontainer}>
        <input
          className={styles.inputform}
          type="text"
          name="name"
          id="name"
          defaultValue={festivalItem?.name}
          required
          placeholder="Name"
        />
        <input
          className={styles.inputformfile}
          type="file"
          name="image"
          id="image"
          placeholder="Image"
        />

        <input
          className={styles.inputform}
          type="text"
          name="musicType"
          id="musicType"
          defaultValue={festivalItem?.musicType}
          required
          placeholder="Type of music"
        />
        <input
          className={styles.inputform}
          type="text"
          name="city"
          id="city"
          defaultValue={festivalItem?.city}
          required
          placeholder="City"
        />
        <input
          className={styles.inputform}
          type="text"
          name="country"
          id="country"
          defaultValue={festivalItem?.country}
          required
          placeholder="Country"
        />
        <input
          className={styles.inputform}
          type="text"
          name="dates"
          id="dates"
          defaultValue={festivalItem?.dates}
          required
          placeholder="Dates"
        />
        <input
          className={styles.inputform}
          type="text"
          name="capacity"
          id="capacity"
          defaultValue={festivalItem?.capacity}
          required
          placeholder="Capacity"
        />
        <button
          className={styles.buttonform}
          type="submit"
          onClick={() => Swal.fire("Congrats! Changes have been saved!")}
        >
          SAVE
        </button>
      </div>
    </form>
  );
}
