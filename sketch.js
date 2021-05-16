const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var binImage,bin;

function preload(){
    binImage = loadImage("dustbingreen.png");
}
function setup(){
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    bin = createSprite(810,485,20,20);
    bin.addImage(binImage);
    bin.scale = 0.6;

    ground = new Ground();
    ball = new Ball();
    box1 = new Box(752,505,10,120);
    box2 = new Box(812,565,130,10);
    box3 = new Box(874,505,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    ball.display();
    box1.display();
    box2.display();
    box3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:67,y:-67});
    }
}
