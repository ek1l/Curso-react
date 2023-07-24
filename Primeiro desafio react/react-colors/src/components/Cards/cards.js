import Card from "../Card/card.js";
import "./style.css";

const cardsArray = ["titulo 1", "titulo 2", "titulo 3"];

const Cards = () => {
  return (
    <div className="cards">
      <h2> Meus Cards</h2>
      <div>
        {
          cardsArray.map((cardTitle, index) => {
            return (

            <Card key={index}>
              <h3>{cardTitle}</h3>
              <p>Este é um texto</p>
            </Card>
            )
          })
        }
      </div>
    </div>
  );
};

export default Cards;
