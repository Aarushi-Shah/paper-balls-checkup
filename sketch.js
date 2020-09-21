
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var BoxB,boxS,boxS2,ball,balla, ballS, packageSprite;

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	//var s = createSprite(x, y, width, height);
	boxB = createSprite(650,660,200,20)
	boxB.shapeColor = color(251,0,0);
	boxS = createSprite(550,610,20,100)
	boxS.shapeColor = color(251,0,0)
	boxS2 = createSprite(750,610,20,100)
	boxS2.shapeColor = color(251,0,0)
	groundSprite = createSprite(width/2, height-35, width,10);
	engine = Engine.create();
	//Bodies.circle = function(x, y, radius, options, maxSides)
	ball1 = Bodies.circle(550,550,100, {isStatic:true, background: '#18181d', density:1.2});
	ball1.shapeColor = color(251,0,0)
	World.add(engine.world,[ball1]);
	Engine.run(engine);
	
  
}


function draw() {
	//rectMode(CENTER);
   	background(0,255,255);
	drawSprites();
}

 function keyPressed(){
 	if (keyCode === UP_ARROW){
		Matter.Body.setStatic(ball1,false);
		Body.applyForce( ball1, {x: ball1.position.x, y: ball1.position.y}, {x: 0.5, y: 0});
 	}
 }

// // function keyPressed(){
// // 	if (keyCode === UP_ARROW){
// // 		Body.setStatic(ball,false)
// // 		applyForce(ball,ball.position,{x:85,y:85});
// // 	}
// // }
 function applyForce (body, position, force) {
	body.force.x += force.x;
	body.force.y += force.y;
	var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
	body.torque += offset.x * force.y - offset.y * force.x;
 };

