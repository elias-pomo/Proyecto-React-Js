import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      // generar un nuevo array, que tenga lo mismo que tenia , pero el producto
      // en cuestion, va cambiar sus cantidades
      const nuevoArray = cart.map((elemento) => {

        if (product.id === elemento.id) {
          console.log(cart);
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;

        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
    console.log(cart);
  };
  const resetCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    console.log(id);
    // nuevo array ---> que tenga todos los elementos excepto el de este id
    // el filter siempre siempre siempre devuelve un array
    const newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const getTotalAmount = () => {
    // reduce ---> reducir un array a una minima expresion
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    removeById,
    resetCart,
    getTotalAmount,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;