
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	box1=new Box(840,310,50,110);
	box2=new Box(1159,310,50,110);
	box3=new Box(1000,340,260,50);

	var ball_options={restitution:1};
	object= Bodies.rectangle(200,390,400,20,object_options);
	 World.add(world,object);
 
	 ball=Bodies.circle(200,100,20,ball_options);
	 World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  drawSprites();
 groundSprite.display();
 box1.display();
 box2.display();
 box3.display();
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.position,{x:85,y:-85})
	}
}


