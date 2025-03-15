import { useState } from "react";
import ProductCard from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import { db } from "../../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./ItemListContainer.css";
import { useParams } from "react-router";
import { Box, Skeleton } from "@mui/material";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const coleccionDeProductos = collection(db, "products");
    const getProducts = getDocs(coleccionDeProductos);
    getProducts.then((res) => {
      let newArray = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setItems(newArray);
    });
  }, [name]);

  // const rellenador = () => {

  //     let productColletion = collection(db, "products");

  //     products.forEach((product) => {
  //         addDoc(productColletion, product);
  //     })
  // };

  return (
    <div className="main">
      <div className="hero"></div>
      <div className="catalogo">
        {/* <botton onClick={rellenador}>rellenar</botton> */}
        <h2>TODOS NUESTROS PRODUCTOS</h2>
        {items.length === 0 ? (
          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="rectangular" width={210} height={118} />
          </Box>
        ) : (
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
                descriptionTitle={item.descriptionTitle}
                description={item.description}
                img1={item.img1}
                img2={item.img2}
                img3={item.img3}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
