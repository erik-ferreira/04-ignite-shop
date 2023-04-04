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
  removeProductCart: (productId: string) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductProps[]>([]);

  function addProductInCart(product: ProductProps) {
    const newListProductsInCart = [...cart, product];

    setCart(newListProductsInCart);
    localStorage.setItem(
      "@ignite-shop:cart-1.0.0",
      JSON.stringify(newListProductsInCart)
    );
  }

  function removeProductCart(productId: string) {
    const newListProductsInCart = cart.filter(
      (product) => product.id !== productId
    );

    setCart(newListProductsInCart);
    localStorage.setItem(
      "@ignite-shop:cart-1.0.0",
      JSON.stringify(newListProductsInCart)
    );
  }

  useEffect(() => {
    const storageCart = localStorage.getItem("@ignite-shop:cart-1.0.0");

    if (storageCart) {
      setCart(JSON.parse(storageCart));
    }
  }, []);

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
