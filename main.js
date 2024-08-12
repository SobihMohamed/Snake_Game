// Import named exports from the snake.js module
import {
  Snake_Speed,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";
import{
    drawFood,updateFood
}from"./food.js";
let gameBoard = document.getElementById("gameBoard");

// Initialize the variable of the time of the last render
let last_render_time = 0;

// Main function that is called repeatedly for animation
function main(current_time) {
  // Request the browser to call the main function before the next repaint
  window.requestAnimationFrame(main); // ! Call it
  // Calculate the number of seconds since the last frame
  const Seconds_since_last_render = (current_time - last_render_time) / 1000; // ! Time difference between function calls
  // Check if enough time has passed to proceed with the update and draw
  if (Seconds_since_last_render < 1 / Snake_Speed) return; // ! Condition to proceed with rendering
//   console.log("render"); // ! Log message to indicate a render action
  last_render_time = current_time; // ! Update the last render time
  update(); // ! Update the game state
  draw(); // ! Render the game state
}

// Start the animation loop by requesting the first frame
window.requestAnimationFrame(main); // ! Start the loop

function update() {
    updateSnake();
    updateFood();
}
function draw() {
    //! to delete the  other snake body
  gameBoard.innerHTML="";
  drawSnake(gameBoard);
  drawFood(gameBoard)
}

// ? reset 
let resetbut=document.getElementById("resetButton");
resetbut.onclick=(e)=>window.location.reload();

