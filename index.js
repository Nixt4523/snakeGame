import {update as updateSnake , draw as drawSnake , snakeSpeed , getSnakeHead , snakeIntersection } from "./snake.js"
import {update as updateFood , draw as drawFood} from "./food.js"
import {outsideGrid} from './gird.js'

let lastRenderTime = 0;
const gameBoard = document.getElementById('gameBoard');
let gameOver = false

function main(currentTime){

    if(gameOver){
        if(confirm("You Lost Press OK To Restart")){
            window.location = '/index.html';
        }
        return
    }
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000;

    if(secondSinceLastRender < 1/snakeSpeed)return

    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood();
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
