import { useEffect } from "react";
import type { AppProps } from "next/app";

import { Footer, Navbar } from "@/shared/components";

//styles global bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

//styles fixed
import "@/styles/fix-styles.css";
import "@/styles/slider.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
    require("bootstrap/dist/css/bootstrap.min.css");
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ height: "100vh" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
