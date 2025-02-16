import { useState } from "react";
import "./ButtonCounter.css";
import { Button } from "@mui/material";

const ButtonCounter = ({stock}) => {
const [Contador, setContador] = useState(0);

  const sumador = () => {
    if (Contador < stock) {
        setContador(Contador + 1);
        console.log(Contador);
    }
  };


    return (
    <div>
        <Button disabled={Contador === stock} variant="outlined" color="success" onClick={sumador}>COMPRAR</Button>
    </div>
    );
};

export default ButtonCounter;
