import { DetailIdResponse, ResponseCharacters } from "./types";

export type RootNameKeys = {
  Url: string;
  "/characters": string | undefined;
};

export type InitialStateCharacters = {
  loading: "loaded" | "pending";
  characters: ResponseCharacters | null | undefined;
};
