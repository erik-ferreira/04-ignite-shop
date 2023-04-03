import { AppProps } from "next/app";

import { Header } from "../components/Header";

import { globalStyles } from "../styles/global";
import { ContainerApp } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContainerApp>
      <Header />

      <Component {...pageProps} />
    </ContainerApp>
  );
}
