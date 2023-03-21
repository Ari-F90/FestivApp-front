import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { Festival } from "../models/festival";

import * as ac from "../reducer/festivals.actions.creator";
import { FestivalApiRepo } from "../services/festival.repo.js";

export function useFestivals(repo: FestivalApiRepo) {
  const festivals = useSelector((state: RootState) => state.festivals);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadFestivals = async () => {
      try {
        const data = await repo.loadFestivals();
        dispatch(ac.loadCreator(data.results));
      } catch (error) {
        console.error((error as Error).message);
      }
    };
    loadFestivals();
  }, [dispatch, repo]);

  const loadOneFestival = async (id: Festival["id"]) => {
    try {
      const data = await repo.loadOneFestival(id);
      dispatch(ac.loadOneCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const addFestival = async (festival: Partial<Festival>) => {
    try {
      const finalFestival = await repo.createFestival(festival);
      dispatch(ac.addCreator(finalFestival.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const updateFestival = async (festival: Partial<Festival>) => {
    try {
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
    loadOneFestival,
    addFestival,
    updateFestival,
    deleteFestival,
  };
}
