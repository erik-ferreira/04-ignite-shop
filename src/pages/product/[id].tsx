import Image from "next/image";
import { useRouter } from "next/router";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>{/* <Image src="" alt="" /> */}</ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          temporibus magnam voluptates voluptatibus! Labore natus accusamus
          recusandae quisquam unde consequuntur perferendis eum ipsam architecto
          officia tenetur cum, ea explicabo adipisci.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
