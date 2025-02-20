import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Badge from '@mui/material/Badge';
import "./CarWidget.css"
import { Link } from 'react-router';
import { useContext } from 'react';
import {CartContext} from '../../../context/CartContext';


const CarWidget = () => {

    const { getTotalQuantity } = useContext(CartContext);
    const total = getTotalQuantity();


    return (
    <div>
        <div>
            <Link to={"/cart"}>
            <ShoppingCartTwoToneIcon />
            <Badge badgeContent={total} color="primary" showZero={true}/>
            </Link>
        </div>
    </div>
    );
};

export default CarWidget