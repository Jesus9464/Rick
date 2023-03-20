import rickAndMorty from "../api";
import {
  ApiResponse,
  DetailIdResponse,
  ResponseCharacters,
} from "../utils/types";

export const getAllCharactersRickAndMorty = async (): Promise<
  ApiResponse<ResponseCharacters>
> => {
  const response = await rickAndMorty.get("/character");

  if (response) {
    return { success: true, response: response.data };
  }

  return { success: false, response: response };
};

export const getCharacterIdService = async (
  id: string | string[] | undefined
): Promise<ApiResponse<DetailIdResponse>> => {
  const response = await rickAndMorty.get(`/character/${id}`);

  if (response) {
    return { success: true, response: response.data };
  }

  return { success: false, response: response };
};
