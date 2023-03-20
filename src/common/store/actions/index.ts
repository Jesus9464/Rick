import { getAllCharactersRickAndMorty } from "@/common/services";
import {
  ApiResponse,
  DetailIdResponse,
  ResponseCharacters,
} from "@/common/utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCharacters = createAsyncThunk(
  "get/getAllCharactersDetails",
  async (): Promise<ApiResponse<ResponseCharacters>> => {
    const res = await getAllCharactersRickAndMorty();

    if (res.success && res.response) {
      return { success: true, response: res.response };
    }
    return { success: false, error: res.error };
  }
);
