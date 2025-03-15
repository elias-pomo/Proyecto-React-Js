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

  let envio = total * 0.1;

  return (
    <div className="contenedor-padre-carrito">
      <div>
        <h1>CARRITO</h1>
      </div>
      <div className="contenedor-principal-carrito">
        <div className="productos-carrito">
          {cart.map((elemento) => {
            return (
              <div key={elemento.id}>
                <div className="tarjeta-carrito">
                  <img src={elemento.imageUrl} alt="" />
                  <div className="info-carrito">
                    <h2>{elemento.title}</h2>
                    <h2>Cantidad: {elemento.quantity}</h2>
                    <h2>Precio: ${elemento.price}</h2>
                  </div>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => {
                      removeById(elemento.id);
                    }}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="compra-carrito">
          <h2>RESUMEN DE COMPRA</h2>
          <div>
            <h3>Productos({cart.length})</h3>
            {cart.length > 0 && <h3>${total}</h3>}
          </div>
          <div>
            <h3>Envio:</h3>
            <h3>${envio}</h3>
          </div>
          <div>
            <Button
              variant="outlined"
              color="error"
              onClick={resetCartWithAlert}
            >
              Vaciar carrito
            </Button>
            <Button variant="contained">
              <Link to="/checkout">finalizar compra</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
