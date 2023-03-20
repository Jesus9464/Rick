import React from "react";
import { useRouter } from "next/router";

import CharacterComponent from "../component";
import { getCharacterIdService } from "@/common/services";
import { DetailIdResponse } from "@/common/utils/types";

function CharacterContainer() {
  const router = useRouter();
  const id = router.query.id;
  const [details, setDetails] = React.useState<DetailIdResponse>();
  const [loading, setLoading] = React.useState(false);

  const fetchDetail = async () => {
    try {
      setLoading(true);
      const result = await getCharacterIdService(id);

      if (result.success) {
        setLoading(false);
        setDetails(result.response);
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (id) {
      fetchDetail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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

  return <CharacterComponent details={details} />;
}

export default CharacterContainer;
