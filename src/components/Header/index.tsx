import Image from "next/image";
import { Handbag } from "phosphor-react";

import logoImg from "../../assets/logo.svg";

import { HeaderContainer, ButtonCart } from "./styles";

export function Header() {
  const hasProductInCart = false;

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <ButtonCart type="button" hasProductInCart={false}>
        {hasProductInCart && <span>1</span>}
        <Handbag size={24} />
      </ButtonCart>
    </HeaderContainer>
  );
}
