import "./App.scss";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Products } from "./components/otherProducts/Products";
import { SloganMaker } from "./components/sloganMaker/SloganMaker";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='main-content'>
        <SloganMaker />
        <About />
        <Products />
        <Footer />
      </div>
    </div>
  );
};

export default App;
