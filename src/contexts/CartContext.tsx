import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { ProductProps } from "../dtos/product";

interface CartContextData {
  cart: ProductProps[];
  addProductInCart: (product: ProductProps) => void;
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

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductInCart,
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
