import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "@/public/index";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn"
            href="https://www.facebook.com/chuchogalviz/"
            target="_blank"
            role="button"
          >
            <Image src={Facebook} style={{ padding: 0 }} alt="logo" />
          </a>
          <a
            className="btn"
            href="https://twitter.com/JESUSALFONSOG19"
            role="button"
          >
            <Image src={Twitter} style={{ padding: 0 }} alt="logo" />
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/jesus-alfonso-galvis-gualy-9820b3197/"
            role="button"
            target="_blank"
          >
            <Image src={Linkedin} style={{ padding: 0 }} alt="logo" />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "black", opacity: "0.5" }}
      >
        made by jesus Galvis
      </div>
    </footer>
  );
}

export default Footer;
