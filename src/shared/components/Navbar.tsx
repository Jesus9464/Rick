import React from "react";
import Image from "next/image";

import ButtonLink from "./ButtonLink";
import { RickLogo } from "@/public/index";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div>
          <Image src={RickLogo} style={{ height: "40px" }} alt="logo" />
          <ButtonLink
            className="btn btn-link text-white text-width notUnderlined font-weight-bold"
            style={{ fontSize: "28px", marginLeft: -40 }}
            navigation="/"
            name="Home Rick"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Oye Rick
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <ButtonLink name=" Home" className="nav-link" navigation="/" />
              </li>
              <li className="nav-item">
                <ButtonLink
                  name="Characters"
                  className="nav-link"
                  navigation="/characters"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
