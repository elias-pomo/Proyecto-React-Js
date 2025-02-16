
import { Button } from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router";


const ProductCard = ({imageUrl, title, price, descriptionTitle, id}) => {
    return (
      <div className="container">
        <div className="productCard">
          <img src={imageUrl} alt={title} />
          <h3>{title}</h3>
          <p>{descriptionTitle}</p>
          <p>${price}</p> 
          <Link to={`/itemDetail/${id}`}>
            <Button variant="outlined" color="primary">
              Ver más
            </Button>
          </Link>
        </div>
      </div>
    )
};

export default ProductCard;


