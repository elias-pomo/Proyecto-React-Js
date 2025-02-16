import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Badge from '@mui/material/Badge';
import "./CarWidget.css"
import { Link } from 'react-router';


const CarWidget = () => {
    return (
    <div>
        <div>
            <Link to={"/cart"}>
            <ShoppingCartTwoToneIcon />
            <Badge badgeContent={2} color="primary" />
             </Link>
        </div>
    </div>
    );
};

export default CarWidget