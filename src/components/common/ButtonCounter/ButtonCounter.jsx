import { useState } from "react";

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
        <button onClick={sumador}>+</button>
    </div>
    );
};

export default ButtonCounter;

