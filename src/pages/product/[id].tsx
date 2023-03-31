import axios from "axios";
import Stripe from "stripe";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { stripe } from "../../lib/stripe";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
  ProductSkeletonContainer,
  ProductSkeletonDetails,
} from "../../styles/pages/product";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

interface ProductPageProps {
  product: ProductProps;
  productNotFound: boolean;
}

export default function Product({
  product,
  productNotFound,
}: ProductPageProps) {
  const { isFallback } = useRouter();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falhar ao redirecionar ao checkout");
    }
  }

  if (isFallback) {
    return (
      <ProductSkeletonContainer>
        <div />

        <ProductSkeletonDetails>
          <div />
          <div />

          <div />
        </ProductSkeletonDetails>
      </ProductSkeletonContainer>
    );
  }

  if (productNotFound) {
    return (
      <>
        <Head>
          <title>404 | Página não encontrada</title>
        </Head>
        <p>Produto não encontrado</p>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_Nbg1ojWTnjIZeb" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  let product = {} as ProductProps;
  console.log("params", params);

  try {
    const productId = params.id;

    const productStripe = await stripe.products.retrieve(productId, {
      expand: ["default_price"],
    });

    const defaultPrice = productStripe.default_price as Stripe.Price;
    const price = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(defaultPrice.unit_amount / 100);

    product = {
      id: productStripe.id,
      name: productStripe.name,
      imageUrl: productStripe.images[0],
      price,
      defaultPriceId: defaultPrice.id,
      description: productStripe.description,
    };
  } catch (err) {
    return {
      props: { product, productNotFound: true },
    };
  }

  return {
    props: { product, productNotFound: false },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
