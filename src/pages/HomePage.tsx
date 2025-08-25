import Header from "../components/Header";
import Home from "../components/Home";
import Categorias from "../components/Categorias";

function HomePage() {
  return (
    <>
      <Header textLogo="Gamor" />
      <Home />
      <Categorias />
    </>
  );
}

export default HomePage;
