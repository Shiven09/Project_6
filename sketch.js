
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var pentagon;
var slingshot;
var ground1;
var score = 0;
var backgroundImg;
var gameState = "onSling";
var bg = "bg1.png";

function preload()
{
  getBackgroundImg();
}



function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	ground1 = new Ground(390,260,220,10)

    
	box1 = new Box(330,235,30,40)
	box2 = new Box(360,235,30,40)
	box3 = new Box(390,235,30,40)
	box4 = new Box(420,235,30,40)
	box5 = new Box(450,235,30,40)
	box6 = new Box(360,195,30,40)
	box7 = new Box(390,195,30,40)
	box8 = new Box(420,195,30,40)
	box9 = new Box(390,155,30,40)

	pentagon = new Polygon(50,200,30);
	slingshot = new Slingshot(pentagon.body,{x:100 , y:200});
	
    Engine.run(engine);
    
  
}


function draw() {
 if(backgroundImg)
        background(backgroundImg);

  
  textSize(35)
  fill("white")
  text("Score  " + score, 750, 40)

  Engine.update(engine);

  

  ground.display();

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();

  pentagon.display();
  slingshot.display();
  ground1.display();
 
}
function mouseDragged()
{
Matter.Body.setPosition(pentagon.body,{x:mouseX , y:mouseY});
gameState = "launched";
}

function mouseReleased()
{
slingshot.fly();
}

function keyPressed()
{
if(keyCode===32)
{
slingshot.attach(pentagon.body);
}
}

async function getBackgroundImg(){
  var response = await fetch(" http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1600){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}




