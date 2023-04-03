import Image from "next/image";
import { Handbag, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";
import imageCamiseta from "../../assets/camisetas/1.png";

import { Button } from "../Button";

import {
  HeaderContainer,
  ButtonCart,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
  ListProductsContainer,
  ImageContainer,
  ProductDetails,
  ContentQuantity,
  ContentValueTotal,
} from "./styles";

export function Header() {
  const hasProductInCart = false;

  return (
    <Dialog.Root>
      <HeaderContainer>
        <Image src={logoImg} alt="" />
        <Dialog.Trigger asChild>
          <ButtonCart type="button" hasProductInCart={false}>
            {hasProductInCart && <span>1</span>}
            <Handbag size={24} />
          </ButtonCart>
        </Dialog.Trigger>
      </HeaderContainer>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <DialogTitle>Sacola de compras</DialogTitle>

          <ListProductsContainer>
            <li>
              <ImageContainer>
                <Image src={imageCamiseta} width={94} height={94} alt="" />
              </ImageContainer>

              <ProductDetails>
                <span>Camiseta Beyond the Limits</span>

                <strong>R$ 79,90</strong>

                <button>Remover</button>
              </ProductDetails>
            </li>

            <li>
              <ImageContainer>
                <Image src={imageCamiseta} width={94} height={94} alt="" />
              </ImageContainer>

              <ProductDetails>
                <span>Camiseta Beyond the Limits</span>

                <strong>R$ 79,90</strong>

                <button>Remover</button>
              </ProductDetails>
            </li>

            <li>
              <ImageContainer>
                <Image src={imageCamiseta} width={94} height={94} alt="" />
              </ImageContainer>

              <ProductDetails>
                <span>Camiseta Beyond the Limits</span>

                <strong>R$ 79,90</strong>

                <button>Remover</button>
              </ProductDetails>
            </li>

            <li>
              <ImageContainer>
                <Image src={imageCamiseta} width={94} height={94} alt="" />
              </ImageContainer>

              <ProductDetails>
                <span>Camiseta Beyond the Limits</span>

                <strong>R$ 79,90</strong>

                <button>Remover</button>
              </ProductDetails>
            </li>
          </ListProductsContainer>

          <ContentQuantity>
            <span>Quantidade</span>
            <span>3 itens</span>
          </ContentQuantity>

          <ContentValueTotal>
            <span>Valor total</span>
            <span>R$ 270,00</span>
          </ContentValueTotal>

          <Button label="Finalizar compra" />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
