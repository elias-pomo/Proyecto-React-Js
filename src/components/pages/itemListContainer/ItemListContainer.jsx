import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    
    return (
        <div>
            <div className="hero">
            <h1>{greeting}</h1>
            <p>¡Encontrá aca tu estilo!</p>
            </div>
            <div className="catalogo">
                <p>encontra aca todas los modelos que tenemos para vos!</p>
                <h2>Catalogo</h2>
                <div className="productos">
                        <ProductCard title={"adidas"} price={50} stock={15} />
                        <ProductCard title={"nike"} price={45} stock={9} />
                        <ProductCard title={"puma"} price={55} stock={10} />
                        <ProductCard title={"Topper"} price={35} stock={6} />
                        <ProductCard title={"Fila"} price={40} stock={8} />
                        <ProductCard title={"Reebok"} price={45} stock={5} />
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
