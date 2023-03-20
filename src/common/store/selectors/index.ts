import { createDraftSafeSelector, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const characters = (state: RootState) => state.characters;

export const selectIsLoadingCharacters = createDraftSafeSelector(
  characters,
  ({ loading }) => loading === "pending"
);

export const selectCharacters = createSelector(
  characters,
  (state) => state.characters
);
