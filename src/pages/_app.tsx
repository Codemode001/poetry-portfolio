import React, { useState } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import styled from "@emotion/styled";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Harold | Creative</title>
      </Head>
      <Component {...pageProps} />;
    </Provider>
  );
}

const MainContainer = styled.div``;
