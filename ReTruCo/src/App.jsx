import NavBar from "./components/layouts/NavBar";
import ItemListContainer from "./components/common/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={'Bienvenidos'}/>
    </div>
  );
}

export default App;
