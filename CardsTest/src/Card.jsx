import {useState} from "react"
import "./Card.css"

function Card({rollName}){
    const [Count, setCount] = useState(0)
    return (
        <>
            <div id="Card">
                <h1 id = "Item">{rollName}</h1>
                <div id = "AddItems">
                    <button onClick = {() => setCount((Count) => Count+1)}>+</button>
                    <h2>{Count}</h2>
                    <button onClick = {() => setCount((Count) => Count-1)} disabled = {Count === 0}>-</button>
                </div>
            </div>
        </>
    );
}
export default Card