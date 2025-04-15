import Card from "./Card.jsx"
import {useState} from "react"

function OrderItems(){
    const rollNames = ["Shawarma Roll", "Peri Peri Roll","Crispy Chicken Roll","Fajita Roll"]
    const [rollQuant, setrollQuant] = useState([0,0,0,0]);

    const updateQuantity = (index, newValue) => {
        const newQuantities = [...rollQuant];
        newQuantities[index] = newValue;
        setRollQuant(newQuantities);
      };
    return (
        <>
            {rollNames.map((rollName, index) => (
        <Card
          key={index}
          rollName={rollName}
          count={rollQuant[index]}
          onIncrement={() => updateQuantity(index, rollQuant[index] + 1)}
          onDecrement={() => updateQuantity(index, rollQuant[index] - 1)}
        />
      ))}
        </>
    );
}
export default OrderItems