import "./Cart.css";

const Cart = ({carrito}) => {
    return <div>
<h2>🛒 Carrito de Compras</h2>
      {carrito.length > 0 ? (
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio}
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>;
};

export default Cart;
