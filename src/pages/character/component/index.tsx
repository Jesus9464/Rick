/* eslint-disable @next/next/no-img-element */
import React from "react";

import { DetailIdResponse } from "@/common/utils/types";
import { ButtonLink } from "@/shared/components";

type Props = {
  details: DetailIdResponse | undefined;
};

const CharacterComponent: React.FC<Props> = ({ details }) => {
  return (
    <>
      <section className="w-100 p-3 h-100 d-inline-block d-flex flex-column justify-content-start align-items-center ">
        <div className="w-100 p-3 h-100 d-inline-block d-flex flex-row justify-content-center align-items-center ">
          <div
            className="d-flex flex-column"
            style={{
              backgroundColor: "aquamarine",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <img src={details?.image} alt={details?.name} />
            <h1>{details?.name}</h1>
          </div>
          <div
            className="mx-4"
            style={{
              borderWidth: "1px",
              borderColor: "black",
              borderRadius: 30,
            }}
          >
            <div className="d-flex flex-row">
              <h1 className="text-primary">Name</h1>
              <h1 className="mx-2">{details?.name}</h1>
            </div>
            <div className="d-flex flex-row">
              <h1 className="text-primary">Gender</h1>
              <h1 className="mx-2">{details?.gender}</h1>
            </div>
            <div className="d-flex flex-row">
              <h1 className="text-primary">Origin</h1>
              <h1 className="mx-2">{details?.origin.name}</h1>
            </div>
            <div className="d-flex flex-row">
              <h1 className="text-primary">Location</h1>
              <h1 className="mx-2">{details?.location.name}</h1>
            </div>
            <div className="d-flex flex-row">
              <h1 className="text-primary">Specie</h1>
              <h1 className="mx-2">{details?.species}</h1>
            </div>
            <div className="d-flex flex-row">
              <h1 className="text-primary">Status</h1>
              <h1 className="mx-2">{details?.status}</h1>
            </div>
          </div>
        </div>
        <ButtonLink
          style={{ width: 400 }}
          navigation="/characters"
          name="Go Back"
        />
      </section>
    </>
  );
};

export default CharacterComponent;
