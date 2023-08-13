import "./App.css";
import Header from "./components/Header";
import LocalHighlight from "./components/LocalHighlight";
import LocalForecast from "./components/LocalForecast";
import LocalityRadar from "./components/LocalityRadar";
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
