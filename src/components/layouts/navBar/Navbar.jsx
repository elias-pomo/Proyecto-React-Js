import ButtonNavBar from "../../common/ButtonNavBar/ButtonNavBar";
import CarWidget from "../../common/carWidget/CarWidget";

const Navbar = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "3px double black", boxShadow: "0px 2px 2px rgb(18, 77, 187)"}}>
            <h2 style={{margin: "15px", padding: "15px", fontSize: "30px"}}>ECOVEX</h2>
            <div>
                <ul style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <ButtonNavBar text= "INICIO"/>
                    <ButtonNavBar text= "CATALOGO"/>
                    <ButtonNavBar text= "OFERTAS"/>
                    <ButtonNavBar text= "CONOCENOS"/>
                </ul>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "10px"}}>
                <CarWidget />
                <p>0</p>
            </div>
            
            
        </div>

    );
};

export default Navbar;