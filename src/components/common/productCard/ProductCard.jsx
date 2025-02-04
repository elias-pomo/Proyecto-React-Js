import ButtonCounter from "../ButtonCounter/ButtonCounter";
import "./ProductCard.css";

const ProductCard = ({ title, price, stock }) => {
    return (
    <div className="productCard">
        <h2>{title}</h2>
        <h2>Precio: ${price}</h2>
        <h2>stock: {stock}</h2>
        <ButtonCounter stock={stock}/>
    </div>
    );
};

export default ProductCard;
