import { InitialStateCharacters } from "@/common/utils";
import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getAllCharacters, getCharacterId } from "../actions";

const initialState: InitialStateCharacters = {
  loading: "loaded",
  characters: null,
};

const characters = createReducer(initialState, (builder) => {
  builder.addCase(getAllCharacters.pending, (state, action) => {
    if (!state) return;
    if (state.loading === "loaded") {
      state.loading = "pending";
    }
  });

  builder.addCase(getAllCharacters.rejected, (state, action) => {
    if (!state) return;
    if (state.loading === "pending") {
      state.loading = "loaded";
    }
  });

  builder.addCase(getAllCharacters.fulfilled, (state, action) => {
    if (state.loading === "pending") {
      state.loading = "loaded";
    }
    state.characters = action.payload.response;
  });
});

const rickAndMortyReducer = combineReducers({
  characters: characters,
});

export type rickAndMortyState = ReturnType<typeof rickAndMortyReducer>;

export default rickAndMortyReducer;
