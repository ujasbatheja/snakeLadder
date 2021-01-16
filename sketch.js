var player;
var snake;
var lader;

function preload(){

}

function setup(){
    createCanvas(1000,1000);
    player = createSprite(20,980,20,20);
    player.shapeColor="white";
}

function draw(){
    background("black");

    fill("yellow");
    text("START",20,995);
    text("END",975,20);

    drawBox();

    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+5;
    }
    if(keyDown(UP_ARROW)){
        player.y = player.y-5;
    }
    spawnSnake();
    spawnladder();

    drawSprites();
}
function drawBox(){
    stroke("white");
    for(var i = 0; i<1000; i=i+100){
    line(i,0,i,1000);
    }
    for(var i = 0; i<1000; i=i+100){
        line(0,i,1000,i);
        }
}
function spawnSnake(){
    if(frameCount%120===0){
    snake = createSprite(500,500,200,10);
    snake.x=Math.round(random(0,1000));
    snake.y=Math.round(random(0,1000));
    snake.shapeColor="green";
    snake.velocityX = 3;
    snake.lifeTime = 333;
    }
}
function spawnladder(){

}