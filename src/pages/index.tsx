import Image from "next/image";
import { GetServerSideProps } from "next";
import { useKeenSlider } from "keen-slider/react";

import shirt1 from "../assets/camisetas/1.png";
import shirt2 from "../assets/camisetas/2.png";
import shirt3 from "../assets/camisetas/3.png";
import shirt4 from "../assets/camisetas/4.png";

import "keen-slider/keen-slider.min.css";
import { HomeContainer, Product } from "../styles/pages/home";

export default function Home({ list }) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {JSON.stringify(list)}

      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt4} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      list: [1, 2, 3],
    },
  };
};
