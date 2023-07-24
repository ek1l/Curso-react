import "./App.css";
import Button from "./components/Button/button";
import Cards from "./components/Cards/cards";

function App() {
  return (
    <>
      <Button label={'clique aqui'} />
      <Button label={'BAIXAR CV'} />
      <Button label={'Meu portfólio'} />
      <Cards />
    </>
  );
}

export default App;
