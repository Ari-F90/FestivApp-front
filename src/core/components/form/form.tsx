import { useMemo, SyntheticEvent } from "react";
import { useParams } from "react-router-dom";
import { useFestivals } from "../../../features/festivals/hooks/use.festivals";
import { Festival } from "../../../features/festivals/models/festival";

import { FestivalApiRepo } from "../../../features/festivals/services/repository/festival.repo";

export default function Form() {
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
      updateFestival(newFestival, image);
    }

    formData.reset();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={festivalItem?.name}
          required
          placeholder="Name"
        />
        <input
          type="file"
          name="image"
          id="image"
          required
          placeholder="Image"
        />

        <input
          type="text"
          name="musicType"
          id="musicType"
          defaultValue={festivalItem?.musicType}
          required
          placeholder="Type of music"
        />
        <input
          type="text"
          name="city"
          id="city"
          defaultValue={festivalItem?.city}
          required
          placeholder="City"
        />
        <input
          type="text"
          name="country"
          id="country"
          defaultValue={festivalItem?.country}
          required
          placeholder="Country"
        />
        <input
          type="text"
          name="dates"
          id="dates"
          defaultValue={festivalItem?.dates}
          required
          placeholder="Dates"
        />
        <input
          type="text"
          name="capacity"
          id="capacity"
          defaultValue={festivalItem?.capacity}
          required
          placeholder="Capacity"
        />
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
}
