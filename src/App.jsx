import "./App.css";
import Header from "./components/Header";
import LocalHighlight from "./components/LocalHighlight";
import LocalityRadar from "./components/localityRadar";
import LocalForecast from "./components/LocalForecast";
function App() {
  return (
    <>
      <Header />
      <LocalHighlight />
      <LocalityRadar />
      <LocalForecast />
    </>
  );
}

export default App;
