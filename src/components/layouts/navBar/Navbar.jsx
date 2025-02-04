import ButtonNavBar from "../../common/ButtonNavBar/ButtonNavBar";
import CarWidget from "../../common/carWidget/CarWidget";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="navbar">
            <h2 >ECOVEX</h2>
            <div>
                <ul>
                    <ButtonNavBar text= "INICIO"/>
                    <ButtonNavBar text= "CATALOGO"/>
                    <ButtonNavBar text= "OFERTAS"/>
                    <ButtonNavBar text= "CONOCENOS"/>
                </ul>
            </div>

            <div className="cart">
                <CarWidget />
                <p>0</p>
            </div>
            
            
        </div>

    );
};

export default Navbar;