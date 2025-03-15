import "./Catalogo.css";
import { useEffect, useState } from "react";
import ProductCard from "../../common/productCard/ProductCard";
import { TextField } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import { useParams } from "react-router";

const Catalogo = () => {
  const {name} = useParams();
  const [busqueda, setBusqueda] = useState("");
  const [items, setItems] = useState([]);
  
      useEffect(() =>{
         const coleccionDeProductos = collection(db, "products");
         const getProducts = getDocs(coleccionDeProductos);
         getProducts.then((res) => {
          let newArray = res.docs.map((elemento) => {
              return{id: elemento.id, ...elemento.data()};
          });
          setItems(newArray);
      });
      }, [name]);

  // Filtrar productos según la marca ingresada
  const productosFiltrados = items.filter((producto) =>
    producto.marca.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <div className="catalogo">

        <div className="heroc">
          <img src="https://res.cloudinary.com/djcguwdgr/image/upload/v1739738438/CATALOGO_maf5ny.jpg" alt="" />
        </div>

        <div className="buscador">
          <h2>Buscar por Marca</h2>
          <TextField id="outlined-basic" label="Ingrese una marca" color="secondary" variant="outlined" sx={{ backgroundColor: "white" }} value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)} />
        </div>

        <div className="productos">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <ProductCard
                key={producto.id}
                imageUrl={producto.imageUrl}
                title={producto.title}
                price={producto.price}
                genero={producto.Genero}
                stock={producto.stock}
                id={producto.id}
                descriptionTitle={producto.descriptionTitle}
                description={producto.description}
                img1={producto.img1}
                img2={producto.img2}
                img3={producto.img3}
              />
            ))
          ) : (
            <p>No se encontraron productos</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
