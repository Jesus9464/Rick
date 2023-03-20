/* eslint-disable @next/next/no-img-element */
import React from "react";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import type { ResponseCharacters } from "@/common/utils/types";
import Link from "next/link";

type Props = {
  characters: ResponseCharacters | null | undefined;
};

const SliderCharacter: React.FC<Props> = ({ characters }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {characters?.results.map((character, index) => (
          <SwiperSlide key={`${character.name}+${index}`}>
            <Link
              href={`/character?id=${character.id}`}
              onClick={() => console.log("rutas")}
              style={{ height: 560 }}
            >
              <img
                src={character.image}
                alt={character.name}
                style={{ padding: 20, paddingBottom: 120 }}
              />
            </Link>
            <h1
              style={{
                position: "absolute",
                color: "black",
                fontWeight: "bold",
                left: 20,
                bottom: 10,
              }}
            >
              {character.name}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        body {
          background: #eee;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #000;
          margin: 0;
          padding: 0;
        }

        body {
          background: #fff;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #000;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          position: relative;
          height: 100%;
        }

        #app {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper {
          width: 440px;
          height: 620px;
          margin-top: 110px;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          font-size: 22px;
          font-weight: bold;
          color: #fff;
        }

        .swiper-slide:nth-child(1n) {
          background-color: rgb(206, 17, 17);
        }

        .swiper-slide:nth-child(2n) {
          background-color: rgb(0, 140, 255);
        }

        .swiper-slide:nth-child(3n) {
          background-color: rgb(10, 184, 111);
        }

        .swiper-slide:nth-child(4n) {
          background-color: rgb(211, 122, 7);
        }

        .swiper-slide:nth-child(5n) {
          background-color: rgb(118, 163, 12);
        }

        .swiper-slide:nth-child(6n) {
          background-color: rgb(180, 10, 47);
        }

        .swiper-slide:nth-child(7n) {
          background-color: rgb(35, 99, 19);
        }

        .swiper-slide:nth-child(8n) {
          background-color: rgb(0, 68, 255);
        }

        .swiper-slide:nth-child(9n) {
          background-color: rgb(218, 12, 218);
        }

        .swiper-slide:nth-child(10n) {
          background-color: rgb(54, 94, 77);
        }
      `}</style>
    </>
  );
};

export default SliderCharacter;
