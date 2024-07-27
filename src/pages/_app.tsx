import React, { Fragment } from "react";
import Router from "next/router";
import { wrapper } from "../context/store";

import type { AppProps } from "next/app";

import "swiper/css";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "../../assets/css/styles.scss"
import * as gtag from "../shared/gtag";

const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
  Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);
