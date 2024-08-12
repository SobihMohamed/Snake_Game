import { 
    onSnake, 
} from "./snake.js";
import{
    expandSnake,
}from"./snake.js";

let FoodPosition = { x: 5, y: 8 };
const ExpansionRate = 1;
let score=document.getElementById("score");
let count=0;

export function updateFood() {
    if(onSnake(FoodPosition)===true){
        expandSnake(ExpansionRate);
        score.innerHTML=`${++count}`;
        FoodPosition.x = Math.floor(Math.random() * 21)+1;
        FoodPosition.y = Math.floor(Math.random() * 21)+1;        
    }
}
export function drawFood(gameBoard) {
  const FoodElement = document.createElement("div");
  FoodElement.style.cssText=` box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);`;
  FoodElement.style.gridColumnStart = FoodPosition.x;
  FoodElement.style.gridRowStart = FoodPosition.y;
  FoodElement.classList.add("food");
  gameBoard.appendChild(FoodElement);
}

