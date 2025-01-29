import Footer from "./components/layouts/footer/Footer";
import Navbar from "./components/layouts/navBar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return(
    <div>
    <Navbar />
    <ItemListContainer greeting={"ECOVEX"}/>
    <Footer />
    </div>
  );
}

export default App;
