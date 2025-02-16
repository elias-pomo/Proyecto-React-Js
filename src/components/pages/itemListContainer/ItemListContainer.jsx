import { useState } from "react";
import { products } from "../../../product";
import ProductCard from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        setItems(products);
    }, []);
    
    return (
        <div className="main">
            <div className="hero">
            </div>
            <div className="catalogo">
                <h2>TODOS NUESTROS PRODUCTOS</h2>
                <div className="productos">
                    {items.map((item) => (
                        <ProductCard
                            key={item.id}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            price={item.price}
                            genero={item.Genero}
                            stock={item.stock}
                            id={item.id}
                            descriptionTitle ={item.descriptionTitle}
                            description={item.description}
                            img1={item.img1}
                            img2={item.img2}
                            img3={item.img3}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
