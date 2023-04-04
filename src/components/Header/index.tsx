import Link from "next/link";
import Image from "next/image";
import { Handbag, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";

import { Button } from "../Button";

import { useCart } from "../../contexts/CartContext";

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
  const { cart } = useCart();
  const totalProductsInCart = cart.length;

  return (
    <Dialog.Root>
      <HeaderContainer>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <Dialog.Trigger asChild>
          <ButtonCart type="button" hasProductInCart={totalProductsInCart > 0}>
            {totalProductsInCart > 0 && <span>{totalProductsInCart}</span>}
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

          <ListProductsContainer haveScroll={totalProductsInCart >= 5}>
            {cart.map((product) => (
              <li key={product.id}>
                <ImageContainer>
                  <Image src={product.imageUrl} width={94} height={94} alt="" />
                </ImageContainer>

                <ProductDetails>
                  <span>{product.name}</span>
                  <strong>{product.priceFormatted}</strong>

                  <button>Remover</button>
                </ProductDetails>
              </li>
            ))}
          </ListProductsContainer>

          <ContentQuantity>
            <span>Quantidade</span>
            <span>
              {totalProductsInCart === 1
                ? `${totalProductsInCart} item`
                : `${totalProductsInCart} itens`}
            </span>
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
