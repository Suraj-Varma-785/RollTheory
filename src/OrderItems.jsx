import Card from "./Card.jsx"
import {useState} from "react"
import "./OrderItems.css"


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
      <div id= "Menu">
      {rollNames.map((rollName, index) => (
        <Card 
          key={index}
          rollName={rollName}
        />
      ))}
    </div>
        </>
    );
}
export default OrderItems