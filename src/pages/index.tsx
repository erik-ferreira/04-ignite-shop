import Stripe from "stripe";
import Head from "next/head";
import Image from "next/image";
import { FormEvent } from "react";
import { GetStaticProps } from "next";
import { Handbag } from "phosphor-react";
import { useKeenSlider } from "keen-slider/react";

import { stripe } from "../lib/stripe";
import { ProductProps } from "../dtos/product";

import { useCart } from "../contexts/CartContext";

import "keen-slider/keen-slider.min.css";
import {
  HomeContainer,
  Product,
  FooterProduct,
  ButtonCart,
} from "../styles/pages/home";

interface HomeProps {
  products: ProductProps[];
}

export default function Home({ products }: HomeProps) {
  const { cart, addProductInCart } = useCart();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      "(max-width: 900px)": {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
      "(max-width: 425px)": {
        slides: {
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  });

  function handleAddProductInCart(event: FormEvent, product: ProductProps) {
    event.preventDefault();

    addProductInCart(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          const productAlreadyExistsInCart = cart.find(
            (productInCart) => productInCart.id === product.id
          );

          return (
            <Product
              key={product.id}
              prefetch={false}
              href={`/product/${product.id}`}
              className="keen-slider__slide"
            >
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <FooterProduct>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.priceFormatted}</span>
                </div>

                <ButtonCart
                  type="button"
                  onClick={(event) => handleAddProductInCart(event, product)}
                  disabled={!!productAlreadyExistsInCart}
                  title={
                    !!productAlreadyExistsInCart
                      ? "Produto já está no carrinho"
                      : "Adicionar produto no carrinho"
                  }
                >
                  <Handbag size={32} weight="bold" />
                </ButtonCart>
              </FooterProduct>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products: ProductProps[] = response.data.map((product) => {
    const defaultPrice = product.default_price as Stripe.Price;
    const priceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(defaultPrice.unit_amount / 100);

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceFormatted,
      price: defaultPrice.unit_amount,
      defaultPriceId: defaultPrice.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
