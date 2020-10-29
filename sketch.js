
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var bin 
var ground
var box1 , box2 , box3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,600);
	ground = new Ground(2000,690,4000,10);

	
	box2 = new Bin(1010,height - 25);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball.display();
  ground.display();
  box2.display();
  
  drawSprites();
 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:1000,y:-1000});
	}
}



