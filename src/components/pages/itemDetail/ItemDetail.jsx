import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { products } from "../../../product";
import { useParams } from "react-router";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import IconBreadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import ButtonCounter from "../../common/ButtonCounter/ButtonCounter";


export const ItemDetail = () => {
  const { id } = useParams();

  // id de useParams
  const [item, setItem] = useState({});

  useEffect(() => {
    let producto = products.find((product) => product.id === id);
    setItem(producto);
  }, [id]);
  return (
    <div>
      <IconBreadcrumbs />
      <Box className="Box" sx={{ flexGrow: 1 }}>
      <Grid className="contenedorPadre" container spacing={2}>
        <Grid className="contenedor" container direction="row" size={{ xs: 6, md: 8 }}>
        <Grid className="contenedor2" container direction="column" sx={{justifyContent: "space-between", alignItems: "flex-start",}} size={{ xs: 6, md: 4 }}>
          <img className="imagen" src={item.img1} alt="" />
          <img className="imagen" src={item.img2} alt="" />
          <img className="imagen" src={item.img3} alt="" />
          </Grid>
          <Grid  className="contenedor3" container direction="column" sx={{justifyContent: "space-between", alignItems: "flex-start",}} size={{ xs: 6, md: 8 }}>
            <img className="imagen2" src={item.imageUrl} alt={item.title} />
          </Grid>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <div className="info">
            <div>
            <h1>{item.title}</h1>
            <h4>{item.Genero}</h4>
            </div>
            <div>
            <p>{item.description}</p>
            </div>
            <div>
            <h2>${item.price}</h2>
              <ButtonCounter />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default ItemDetail