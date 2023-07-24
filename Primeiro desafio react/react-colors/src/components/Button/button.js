import "./style.css";
const changeColor = (label) => {
  const getCard = document.querySelectorAll(".card");

  getCard.forEach((e) => {
    e.classList.toggle("active");
  });

  console.log(`Meu label é ${label}`);
};

const Button = ({ label }) => {
  return (
    <button className="btn" onClick={() => changeColor(label)}>
      {label}
    </button>
  );
};

export default Button;
