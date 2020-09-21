
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var BoxB,boxS,boxS2,ball,ballS, packageSprite;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	ballS=createSprite(100, 200, 10,10);
	ballS.scale=1.5;

	boxB = createSprite(650,660,200,20)
	boxB.shapeColor = color(251,0,0)
	boxS = createSprite(550,610,20,100)
	boxS.shapeColor = color(251,0,0)
	boxS2 = createSprite(750,610,20,100)
	boxS2.shapeColor = color(251,0,0)
	
	groundSprite = createSprite(width/2, height-35, width,10);

	ballS.shapeColor = color(255,255,255);
	
	engine = Engine.create();
	world = engine.world;

 	ball = Bodies.circle(100,650,1, {restitution:2,isStatic:true, density:1.2,friction:0.5} );
 	World.add(world,ball)
	 var options={
		 	isStatic:false,
		 	restitution:0.3,
		 	friction:0.5,
		 	density:1.2
		 	}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ballS.x = ball.position.x;
  ballS.y = ball.position.y; 

 drawSprites();
}

// function keyPressed(){
// 	if (keyCode === UP_ARROW){
// 		Body.setStatic(ball,false)
// 		Body.applyForce(ball,ball.position,{x:5,y:5});
// 	}
// }

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.setStatic(ball,false)
		applyForce(ball,ball.position,{x:85,y:85});
		alert(ball.position);
	}
}
function applyForce (body, position, force) {
	body.force.x += force.x;
	body.force.y += force.y;
	var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
	body.torque += 5;
};

