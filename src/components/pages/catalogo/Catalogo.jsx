import "./Catalogo.css";
import {useState } from "react";
import { products } from "../../../product";
import ProductCard from "../../common/productCard/ProductCard";
import { TextField } from "@mui/material";

const Catalogo = () => {
  const [busqueda, setBusqueda] = useState("");

  // Filtrar productos según la marca ingresada
  const productosFiltrados = products.filter((producto) =>
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
      <TextField id="outlined-basic" label="Ingrese una marca" color="secondary" variant="outlined" value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}/>
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
                            descriptionTitle ={producto.descriptionTitle}
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
