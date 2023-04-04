import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  MessageCartEmpty,
  ImageContainer,
  ProductDetails,
  ContentQuantity,
  ContentValueTotal,
} from "./styles";

export function Header() {
  const { cart, removeProductCart } = useCart();

  const totalProductsInCart = cart.length;
  const sumCentsPrice = cart.reduce((acc, product) => acc + product.price, 0);
  const totalPriceProducts = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(sumCentsPrice / 100);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  function handleRemoveProduct(productId: string) {
    removeProductCart(productId);
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const listPricesIds = cart.map((product) => product.defaultPriceId);

      const response = await axios.post("/api/checkout", {
        listPricesIds,
      });

      const { checkoutUrl } = response.data;

      localStorage.removeItem("@ignite-shop:cart-1.0.0");
      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falhar ao redirecionar ao checkout");
    }
  }

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

          {totalProductsInCart === 0 ? (
            <MessageCartEmpty>
              O seu carrinho está vazio. Adicione alguns produtos!
            </MessageCartEmpty>
          ) : (
            <ListProductsContainer haveScroll={totalProductsInCart >= 5}>
              {cart.map((product) => (
                <li key={product.id}>
                  <ImageContainer>
                    <Image
                      src={product.imageUrl}
                      width={94}
                      height={94}
                      alt=""
                    />
                  </ImageContainer>

                  <ProductDetails>
                    <span>{product.name}</span>
                    <strong>{product.priceFormatted}</strong>

                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Remover
                    </button>
                  </ProductDetails>
                </li>
              ))}
            </ListProductsContainer>
          )}

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
            <span>{totalPriceProducts}</span>
          </ContentValueTotal>

          <Button
            label="Finalizar compra"
            disabled={totalProductsInCart <= 0 || isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
