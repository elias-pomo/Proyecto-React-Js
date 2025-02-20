import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";

const Counter = ({ item }) => {
    const [contador, setContador] = useState(1);
    const { addToCart } = useContext(CartContext);

    const sumador = () => {
        if (contador < item.stock) {
            setContador(contador + 1);
            alert("hola");
        } else {
            alert("stock maximo");
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            alert("minimo 1 producto");
        }
    };

    // cart = [ {} ]
    const onAdd = () => {
        let objetoParaElCarrito = { ...item, quantity: contador };
        addToCart(objetoParaElCarrito);
    };

    return (
        <div>
            <Button variant="outlined" color="success" onClick={onAdd}>Agregar al carrito </Button>
            <div style={{ display: "flex", gap: "20px" }}>
                <Button onClick={restar}>restar</Button>
                <h2>{contador}</h2>
                <Button onClick={sumador}>sumar</Button>
            </div>
        </div>
    );
};

export default Counter;
