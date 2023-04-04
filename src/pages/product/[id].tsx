import Stripe from "stripe";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { stripe } from "../../lib/stripe";
import { ProductProps } from "../../dtos/product";

import { Button } from "../../components/Button";

import { useCart } from "../../contexts/CartContext";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
  ProductSkeletonContainer,
  ProductSkeletonDetails,
} from "../../styles/pages/product";

interface Product extends ProductProps {
  description: string;
  defaultPriceId: string;
}

interface ProductPageProps {
  product: Product;
  productNotFound: boolean;
}

export default function Product({
  product,
  productNotFound,
}: ProductPageProps) {
  const { isFallback } = useRouter();
  const { addProductInCart, cart } = useCart();
  const productAlreadyExistsInCart = cart.find(
    (productInCart) => productInCart.id === product.id
  );

  function handleAddProductInCart() {
    addProductInCart(product);
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
          <span>{product.priceFormatted}</span>

          <p>{product.description}</p>

          <Button
            disabled={!!productAlreadyExistsInCart}
            onClick={handleAddProductInCart}
            label="Colocar na sacola"
            hasMarginAuto
          />
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
  let product = {} as Product;

  try {
    const productId = params.id;

    const productStripe = await stripe.products.retrieve(productId, {
      expand: ["default_price"],
    });

    const defaultPrice = productStripe.default_price as Stripe.Price;
    const priceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(defaultPrice.unit_amount / 100);

    product = {
      id: productStripe.id,
      name: productStripe.name,
      imageUrl: productStripe.images[0],
      price: defaultPrice.unit_amount,
      priceFormatted,
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
