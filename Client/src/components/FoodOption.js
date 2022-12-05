import "./FoodOption.css";

function FoodOption(props) {
  return (
    <div className="food-item" onClick={props.onClick}>
      <img className="food-item__img" src={props.img} />
      <div className="food-item__details">
        <h2 className="food-item__details-item">Name: {props.title}</h2>
        <h2 className="food-item__details-item">Description: {props.desc}</h2>
        <h2 className="food-item__details-item">Price: {props.price} $</h2>
      </div>
    </div>
  );
}

export default FoodOption;
