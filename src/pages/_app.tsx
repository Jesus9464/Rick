import { useEffect } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import { Footer, Navbar } from "@/shared/components";
import { store } from "@/common/store/store";

//styles swiper
import "swiper/css";
import "@/styles/slider.css";
import "swiper/css/effect-cards";

//styles global bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

//styles fixed
import "@/styles/fix-styles.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <div style={{ height: "100vh" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  );
}
