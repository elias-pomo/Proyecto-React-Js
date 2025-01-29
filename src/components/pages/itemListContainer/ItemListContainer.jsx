import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = ({ greeting }) => {
    
    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "250px", borderBottom: "3px double black"}}>
            <h1>{greeting}</h1>
            <p>¡Encontrá aca tu estilo!</p>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid black", height: "350px"}}>
                <p>encontra aca todas los modelos que tenemos para vos!</p>
                <h2>Catalogo</h2>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "100%", height: "300px", borderBottom: "2px solid black", borderTop: "2px solid black"}}>
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
