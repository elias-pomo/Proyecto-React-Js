import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { products } from "../../../product";
import { useParams } from "react-router";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import IconBreadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Counter from "../../common/Counter/Counter";


export const ItemDetail = () => {
  const { id } = useParams();

  // id de useParams
  const [item, setItem] = useState({});

  useEffect(() => {
    let producto = products.find((product) => product.id === id);
    setItem(producto);

  }, [id]);
  let precio1 = item.price / 3;
  let precio2 = item.price / 6;
  let precio3 = item.price / 12;
  return (
    <div>
      <IconBreadcrumbs />
      <Box className="Box" sx={{ flexGrow: 1 }}>
        <Grid className="contenedorPadre" container spacing={2}>
          <Grid className="contenedor" container direction="row" size={{ xs: 6, md: 8 }}>
            <Grid className="contenedor2" container direction="column" sx={{ justifyContent: "space-between", alignItems: "flex-start", }} size={{ xs: 6, md: 4 }}>
              <img className="imagen" src={item.img1} alt="" />
              <img className="imagen" src={item.img2} alt="" />
              <img className="imagen" src={item.img3} alt="" />
            </Grid>
            <Grid className="contenedor3" container direction="column" sx={{ justifyContent: "space-between", alignItems: "flex-start", }} size={{ xs: 6, md: 8 }}>
              <img className="imagen2" src={item.imageUrl} alt={item.title} />
            </Grid>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <div className="info">
              <div className="infocontainer">
                <h1>{item.title}</h1>
                <h4>{item.Genero}</h4>
                <h2>${item.price}</h2>
                <div className="container-tarjetas">
                  <h2>¡Aprovechá nuestras promociones bancarias!</h2>
                  <div className="info-tarjetas">
                    <div className="tarjetas">
                      <img src="https://res.cloudinary.com/djcguwdgr/image/upload/v1740007915/visa_awr7bg.webp" alt="" />
                      <img src="https://res.cloudinary.com/djcguwdgr/image/upload/v1740007915/master_zn2bgs.webp" alt="" />
                      <img src="https://res.cloudinary.com/djcguwdgr/image/upload/v1740007915/cabal_fcgnbd.webp" alt="" />
                      <img src="https://res.cloudinary.com/djcguwdgr/image/upload/v1740007915/amex_wlelyr.webp" alt="" />
                    </div>
                    <div className="cuotas">
                      <h3>3 cuotas sin interés de ${precio1}</h3>
                      <h3>6 cuotas sin interés de ${precio2}</h3>
                      <h3>12 cuotas fijas de ${precio3}</h3>
                    </div>
                    <div className="text-tarjetas">
                      <h4>Ver cuotas y todos los medios de pago</h4>
                      <h4> {'>'} </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Counter item={item} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default ItemDetail