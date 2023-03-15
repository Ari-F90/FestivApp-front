import { Festival } from "../../festivals/entities/festival";

export type ProtoUser = {
  email: string;
  password: string;
  name: string;
  surname: string;
  favoriteFestival: Festival[];
};

export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  favoriteFestival: Festival[];
};