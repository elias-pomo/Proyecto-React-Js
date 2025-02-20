import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

const Cart = () => {

  const { resetCart, cart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();
  const resetCartWithAlert = () => {
    Swal.fire({
      title: "Estas seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "si, vaciar carrito",
      confirmButtonColor: "red",
      denyButtonColor: "green",
      denyButtonText: `No, dejar como estaba`,
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        resetCart();
        Swal.fire({
          title: "Carrito vaciado con exito",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
          icon: "success",
        });
      } else if (result.isDenied) {
        // resetCart();
      }
    });
  };

  return (
    <div>
      <div>
        <h1>Carrito</h1>
      </div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{
              margin: "10px",
              width: "200px",
              border: elemento.id === "2" ? "2px solid black" : "2px solid red",
            }}
            className={elemento.id === "2" ? "principal" : "secundario"}
          >
            <h2>{elemento.title}</h2>
            <h2>Cantidad: {elemento.quantity}</h2>
            <h2>Cantidad: {elemento.price}</h2>
            <Button
              variant="text"
              onClick={() => {
                removeById(elemento.id);
              }}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 && <h2>El total a pagar es {total}</h2>}

      <Button variant="outlined" color="error" onClick={resetCartWithAlert}>
        Vaciar carrito
      </Button>
      <Button variant="contained">
        <Link to="/checkout">finalizar compra</Link>
      </Button>
    </div>
  );
};
export default Cart;
