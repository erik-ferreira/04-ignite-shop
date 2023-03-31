import Stripe from "stripe";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { useKeenSlider } from "keen-slider/react";

import { stripe } from "../lib/stripe";

import "keen-slider/keen-slider.min.css";
import { HomeContainer, Product } from "../styles/pages/home";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface HomeProps {
  products: ProductProps[];
}

export default function Home({ products }: HomeProps) {
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

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product, index) => (
          <Product
            key={product.id}
            prefetch={false}
            href={`/product/${product.id}`}
            className="keen-slider__slide"
          >
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const defaultPrice = product.default_price as Stripe.Price;
    const price = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(defaultPrice.unit_amount / 100);

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
