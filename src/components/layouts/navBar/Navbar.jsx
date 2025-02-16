import { Link } from "react-router";
import CarWidget from "../../common/carWidget/CarWidget";
import "./Navbar.css";
import { Button } from "@mui/material";
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"><img src="https://res.cloudinary.com/djcguwdgr/image/upload/v1739740781/WhatsApp_Image_2025-02-08_at_8.15.12_PM_scs4jd.jpg" alt="" /></Link>
            <div className="buttons">
                <Link to="/"><Button variant="outlined" color="secondary">INICIO</Button></Link>
                <Link to="/Catalogo"><Button variant="outlined" color="secondary">CATALOGO</Button></Link>
            </div>

            <div className="cart">
                <CarWidget />
            </div>


        </div>

    );
};

export default Navbar;