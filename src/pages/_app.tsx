import Image from "next/image";
import { AppProps } from "next/app";
import { Handbag } from "phosphor-react";

import logoImg from "../assets/logo.svg";

import { globalStyles } from "../styles/global";
import { ContainerApp, Header, ButtonCart } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const hasProductInCart = false;

  return (
    <ContainerApp>
      <Header>
        <Image src={logoImg} alt="" />
        <ButtonCart type="button" hasProductInCart={false}>
          {hasProductInCart && <span>1</span>}
          <Handbag size={24} />
        </ButtonCart>
      </Header>

      <Component {...pageProps} />
    </ContainerApp>
  );
}
