import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";

const Acordeon = () => {
    const { id } = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        let productCollection = collection(db, "products");
        let refDoc = doc(productCollection, id);
        const getProduct = getDoc(refDoc);
        getProduct.then((res) => {
          setItem({ id: res.id, ...res.data() });
        });
      }, [id]);

    return (
        <div>
            <Accordion sx={{ width: "88%", marginLeft: "2.3%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Descripcion</Typography>
                </AccordionSummary>
                <AccordionDetails className="descripcion-acordeon">
                    {item.description}
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: "88%", marginLeft: "2.3%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Especificaciones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Zapatillas
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{ width: "88%", marginLeft: "2.3%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span">Opiniones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    10/10 pa
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion></div >
    )
}

export default Acordeon