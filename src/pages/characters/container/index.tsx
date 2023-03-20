import React from "react";

import { getAllCharacters } from "@/common/store/actions";
import {
  selectCharacters,
  selectIsLoadingCharacters,
} from "@/common/store/selectors";
import { useAppDispatch, useAppSelector } from "@/common/store/store";
import SliderCharacter from "@/shared/components/SliderCharacter";

function CharactersContainer() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectIsLoadingCharacters);
  const characters = useAppSelector(selectCharacters);

  const fetchCharactersAll = async () => {
    try {
      const result = await dispatch(getAllCharacters()).unwrap();

      if (result.success && result.response) {
        return;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    if (!characters?.results.length) fetchCharactersAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="spinner-border" role="status" />
      </div>
    );
  }

  return <SliderCharacter characters={characters} />;
}

export default CharactersContainer;
