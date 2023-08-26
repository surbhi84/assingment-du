import "./App.scss";
import { Header } from "./components/header/Header";
import { SloganMaker } from "./components/sloganMaker/SloganMaker";

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <SloganMaker/>
    </div>
  );
};

export default App;
