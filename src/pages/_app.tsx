import Image from "next/image";
import { AppProps } from "next/app";

import logoImg from "../assets/logo.svg";

import { globalStyles } from "../styles/global";
import { ContainerApp, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContainerApp>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </ContainerApp>
  );
}
