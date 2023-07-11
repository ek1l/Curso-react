import Card from "../card/card";
const cardsTitle = ["Título card 1", "Título card 2", "Título card 3"];
const Cards = () => {
  return (
    <div className="cards">
      <h2>Meus cards</h2>
      <div>
        {cardsTitle.map((cardTitle) => {
          return (
            <Card>
              <h3>{cardTitle}</h3>
              <p>Esse é um texto</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
