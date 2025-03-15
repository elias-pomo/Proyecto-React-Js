import "./Checkout.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Resumen from "../../common/Resumen/Resumen";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../FirebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const [pago, setpago] = useState("");
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handingChange = (event) => {
    setpago(event.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setIsLoading(true);
    let total = getTotalAmount();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let refCollection = collection(db, "orders");
    const promiseResponse = addDoc(refCollection, order);
    promiseResponse.then((res) => {
      setOrderId(res.id);
      resetCart();
      setIsLoading(false);
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((item) => {
      let productRef = doc(productsCollection, item.id);
      updateDoc(productRef, { stock: item.stock - item.quantity });
    });
  };

  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  let scheckout = 1;
  return (
    <div>
      {!isLoading && orderId && (
        <h2>Gracias por tu compra tu ticket es {orderId}</h2>
      )}
      <div className="cajitaDeCheck">
        <div className="cajita">
          <form className="formulario-checkout1" onSubmit={handleSubmit}>
            <TextField
              className="form1"
              variant="outlined"
              color="primary"
              label="Nombre y Apellido"
              type="text"
              name="name"
              onChange={handleChange}
            />
            <TextField
              className="form1"
              variant="outlined"
              color="primary"
              label="Email"
              type="text"
              name="email"
              onChange={handleChange}
            />
            <TextField
              className="form1"
              variant="outlined"
              color="primary"
              label="Numero de Telefono"
              type="text"
              name="PhoneNumber"
              onChange={handleChange}
            />

            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Tipo de pago
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={pago}
                  label="Pago"
                  onChange={handingChange}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={1}>Tarjeta</MenuItem>
                  <MenuItem value={2}>Efectivo</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {pago === 1 ? (
              <div className="checkout-padre">
                <form className="formulario-checkout" onSubmit>
                  <div className="tarjeta2">
                    <div className="tarjeta3">
                      <TextField
                        variant="outlined"
                        color="primary"
                        label="Numero de tarjeta"
                        helperText="XXXX XXXX XXXX XXXX"
                        className="datosF"
                        type="text"
                        name="tarjeta"
                        onChange
                      />
                      <TextField
                        variant="outlined"
                        color="primary"
                        label="Nombre completo"
                        helperText="Titular de la tarjeta"
                        className="datosF"
                        type="text"
                        name="nombre"
                        onChange
                      />
                    </div>
                  </div>
                  <div className="dato1">
                    <TextField
                      variant="outlined"
                      color="primary"
                      label="Fecha de vencimiento"
                      helperText="MM/AA"
                      className="datos"
                      type="text"
                      name="vencimiento"
                      onChange
                    />
                    <TextField
                      variant="outlined"
                      color="primary"
                      label="Codigo de seguridad"
                      helperText="CVV"
                      className="datos"
                      type="text"
                      name="codigo"
                      onChange
                    />
                  </div>
                  <TextField
                    variant="outlined"
                    color="primary"
                    label="DNI"
                    className="datosF"
                    type="text"
                    name="dni"
                    onChange
                  />
                </form>
              </div>
            ) : (
              <div className="efectivo">
                <h2 className="cupon">C163785-d.pdf</h2>
                <Button variant="outlined" color="success">
                  Imprimir Cupon de pago
                </Button>
              </div>
            )}
            <div className="botones-ckeckout"></div>
            <div className="botones-checkout">
              <Button
                variant="contained"
                color="success"
                type="submit"
                onSubmit={handleSubmit}
              >
                Comprar
              </Button>
              <Button variant="contained" color="error" type="button">
                Cancelar
              </Button>
            </div>
          </form>
        </div>
        <div className="cajita">
          <Resumen scheckout={scheckout} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
