
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var tree1
var ground
var stone
var mango1
var boy
var sling


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1= new Tree(200,200,300,1600);
	ground= new Ground(400,690,800,20);
	stone= new Stone(200,200,2,20);
	mango= new Mango(200,200,0,20);
	boy= new Boy(200,200,20,20)
sling= new Chain(stone.body,{x:10,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree1.display();
  ground.display();
  stone.display();
  mango.display();
boy.display();
sling.display();
//mouseDragged();
// mouseReleased();
keyPressed();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(sling.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}


function keyPressed(){
    if(keyCode===32){
sling.attach(stone.body);
    }
}
