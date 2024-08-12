import{
    getInputDirection,
}from"./input.js";
let name;
function take_data(){
    name=prompt("Please Enter Your Name 😊: ")
    if(name===null)
        name="User"
}
take_data();
export let Snake_Speed = 3; //? 1 means snake moves one movement per second.
const snake_body = [
    
    { x: Math.floor(Math.random() * 21)+1, y: Math.floor(Math.random() * 21)+1 },
    
]; //? start position
// !snake_body.length-2/* to catch the before ends by one of snake */
export function update() {
    let InputDirection=getInputDirection();
    for (let i = snake_body.length-2; i >=0; i--) {
        snake_body[i+1]={...snake_body[i]};
    }
    if(snake_body[0].x>21 || snake_body[0].x<0||
       snake_body[0].y<0 || snake_body[0].y>21  )
       {
           alert(`😢 Sobieh tell ${name} looooooossserr!!😭`);
           window.location.reload();
           snake_body[0].x=11;
           snake_body[0].y=11;
           return;
       }
       if(Headintersection()){
           alert(`😢 Sobieh tell ${name}  looooooooossserr!! 😭`);
           window.location.reload();
       }
       
    snake_body[0].x+=InputDirection.x;
    snake_body[0].y+=InputDirection.y;
}

export function draw(gameBoard) {
    snake_body.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function onSnake(Food_Pos){
    return snake_body.some((Snake_Pos)=>{
        return Food_Pos.x===Snake_Pos.x&&Food_Pos.y===Snake_Pos.y;
    })
}

function Headintersection() {
    for (let i = 4; i < snake_body.length; i++) {
        if (snake_body[0].x === snake_body[i].x && snake_body[0].y === snake_body[i].y &&snake_body.length>3) {
            return true; // Collision detected
        }
    }
    return false; // No collision
}

export function expandSnake(amount){
    let expandNum=0;
    expandNum+=amount;
    for (let i = 0; i < expandNum; i++) {
        // ! copy last div and push it
        snake_body.push({...snake_body[snake_body.length-1]})
    }
    return expandNum;
}
// ! make it Hard
let hardbut=document.getElementById("HardButton");
let addTEXTHard=document.getElementById("hard");
let c=0;
hardbut.onclick = () => {
    Snake_Speed += 3;
    if(Snake_Speed%3==0){
        c++;
        addTEXTHard.innerHTML=`${c}`;
    }
};
