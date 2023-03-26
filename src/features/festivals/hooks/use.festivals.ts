import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newImage } from "../services/firebase/firebase-user";
import { AppDispatch, RootState } from "../../../core/store/store";
import { Festival } from "../models/festival";
import * as ac from "../reducer/festivals.actions.creator";
import { FestivalApiRepo } from "../services/repository/festival.repo";
import { useNavigate } from "react-router-dom";

export function useFestivals(repo: FestivalApiRepo) {
  const festivals = useSelector((state: RootState) => state.festivals);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const loadFestivals = useCallback(
    async (pageChange: number = 0) => {
      try {
        const data = await repo.loadFestivals(pageChange);
        dispatch(ac.loadCreator(data.results));
      } catch (error) {
        // console.error((error as Error).message);
      }
    },

    [dispatch, repo]
  );

  const loadByMusic = async (filter: Festival["musicType"]) => {
    try {
      const data = await repo.loadByMusic(filter);
      dispatch(ac.loadByMusicCreator(data.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const loadOneFestival = async (id: Festival["id"]) => {
    try {
      const data = await repo.loadOneFestival(id);
      dispatch(ac.loadOneCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const addFestival = async (festival: Partial<Festival>, file: File) => {
    try {
      await newImage(festival, file);

      const finalFestival = await repo.createFestival(festival);
      navigate("/festivals");
      dispatch(ac.addCreator(finalFestival.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const updateFestival = async (
    festival: Partial<Festival>,
    file: File,
    oldImage: string | undefined
  ) => {
    try {
      file ? await newImage(festival, file) : (festival.image = oldImage);
      const finalFestival = await repo.updateFestival(festival);

      dispatch(ac.updateCreator(finalFestival.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const deleteFestival = async (id: Festival["id"]) => {
    try {
      await repo.deleteFestival(id);
      dispatch(ac.deleteCreator(id));
    } catch (error) {
      //Console.error((error as Error).message);
    }
  };

  return {
    festivals,
    loadFestivals,
    loadByMusic,
    loadOneFestival,
    addFestival,
    updateFestival,
    deleteFestival,
  };
}
