import './Resumen.css'
import { CartContext } from "../../../context/CartContext";
import { useContext } from 'react';


const Resumen = () => {
    const { cart, getTotalAmount } =
        useContext(CartContext);



    let total = getTotalAmount();
    let envio = total * 0.10;
    return (
        <div className="compra-carrito1">
            <h2>RESUMEN DE COMPRA</h2>
            <div>
                <h3>Productos({cart.length})</h3>
                {cart.length > 0 && <h3>${total}</h3>}
            </div>
            <div>
                <h3>Envio:</h3>
                <h3>${envio}</h3>
            </div>
        </div>
    )
}

export default Resumen