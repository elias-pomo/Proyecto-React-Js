import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Breadcrumbs.css";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
function handleClick(event) {
  event.preventDefault();
}

export default function IconBreadcrumbs() {
  const { id } = useParams();

  // id de useParams
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
    <div className="breadcrumbs" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          INICIO
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/catalogo"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          CATALOGO
        </Link>
        <Typography
          sx={{ color: "text.primary", display: "flex", alignItems: "center" }}
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {item.title}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
