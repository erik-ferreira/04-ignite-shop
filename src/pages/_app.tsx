import { AppProps } from "next/app";

import { Header } from "../components/Header";

import { CartContextProvider } from "../contexts/CartContext";

import { globalStyles } from "../styles/global";
import { ContainerApp } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <ContainerApp>
        <Header />

        <Component {...pageProps} />
      </ContainerApp>
    </CartContextProvider>
  );
}
