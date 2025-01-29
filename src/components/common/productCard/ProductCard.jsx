import ButtonCounter from "../ButtonCounter/ButtonCounter";

const ProductCard = ({ title, price, stock }) => {
    return (
    <div style={{ border: "2px double black", padding: "10px", margin: "10px", height: "200px", width: "150px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
        <h2>{title}</h2>
        <h2>Precio: ${price}</h2>
        <h2>stock: {stock}</h2>
        <ButtonCounter stock={stock}/>
    </div>
    );
};

export default ProductCard;
