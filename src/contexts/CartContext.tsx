import { createContext, ReactNode, useContext, useState } from "react";

import { ProductProps } from "../dtos/product";

interface CartContextData {
  cart: ProductProps[];
  addProductInCart: (product: ProductProps) => void;
  removeProductCart: (productId: string) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductProps[]>([]);

  function addProductInCart(product: ProductProps) {
    setCart((prevState) => [...prevState, product]);
  }

  function removeProductCart(productId: string) {
    const newListProductsInCart = cart.filter(
      (product) => product.id !== productId
    );

    setCart(newListProductsInCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductInCart,
        removeProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
