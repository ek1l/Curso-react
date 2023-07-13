import Card from "../card/card";
import "./cards.css";

const cardsTitle = ["Título card 1", "Título card 2", "Título card 3"];

const showCardColor = (color) => {
  console.log(color);
};

const Cards = () => {
  return (
    <div className="cards">
      <h2>Meus cards</h2>
      <div>
        {cardsTitle.map((cardTitle) => (
          <Card key={cardTitle} showCardColor={showCardColor}>
            <h3>{cardTitle}</h3>
            <p>Esse é um texto</p>
          </Card>
        ))}

        <Card color="blue" showCardColor={showCardColor}>
          <h3>Card com fundo azul</h3>
          <p>Esse é um texto</p>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
