import { User } from "../../users/models/user";

export type ProtoFestival = {
  name: string;
  image: string;
  musicType: string;
  city: string;
  country: string;
  dates: string;
  capacity: number;
  isFavorite: boolean;
  owner: User;
};

export type Festival = {
  id: string;
  name: string;
  image: string;
  musicType: string;
  city: string;
  country: string;
  dates: string;
  capacity: number;
  isFavorite: boolean;
  owner: User;
};

export type FestivalServerResp = {
  results: Festival[];
};
