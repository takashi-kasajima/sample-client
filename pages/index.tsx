import Head from "next/head";
import theme from "../components/theme";
import React from "react";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>sample client</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cuprum:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>
        {`
          body {
            margin: 0;
          }
        `}
      </style>

      <main
        style={{
          margin: 0,
          backgroundColor: "rgb(245, 241, 232)",
        }}
      >
        hello, world
      </main>
    </ThemeProvider>
  );
}
