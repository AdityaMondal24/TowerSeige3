
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg = "sprites/black.png";
var score = 0;
var backGroundImg;
var gameState = "onSling";

function preload()
{
  getBackgroundImg();
}
function setup() {
	createCanvas(1600, 600);
  
  engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(700,500,400,20);
	ground2 = new Ground(1100,300,300,20);
	
	box1 = new BoxB(550,465,50,50);
	box2 = new BoxB(600,465,50,50);
	box3 = new BoxB(650,465,50,50);
	box4 = new BoxB(700,465,50,50);
	box5 = new BoxB(750,465,50,50);
	box6 = new BoxB(800,465,50,50);
	box7 = new BoxB(850,465,50,50);

	box8 = new BoxP(600,415,50,50);
	box9 = new BoxP(650,415,50,50);
	box10 = new BoxP(700,415,50,50);
	box11= new BoxP(750,415,50,50);
	box12= new BoxP(800,415,50,50);

	box13 = new BoxG(650,365,50,50);
	box14 = new BoxG(700,365,50,50);
	box15 = new BoxG(750,365,50,50);

	box16 = new BoxGrey(700,315,50,50);

	box17 = new BoxB(1000,265,50,50);
	box18 = new BoxB(1050,265,50,50);
	box19 = new BoxB(1100,265,50,50);
	box20 = new BoxB(1150,265,50,50);
	box21 = new BoxB(1200,265,50,50);

	box22 = new BoxG(1050,215,50,50);
	box23 = new BoxG(1100,215,50,50);
	box24 = new BoxG(1150,215,50,50);

	box25 = new BoxP(1100,165,50,50);

	striker = new Striker(100,300,60,60);

	chain = new Slingshot(striker.body,{x: 100, y: 300});
  
}


function draw() 
{
  if(backGroundImg)
  {
    background(backGroundImg);
    noStroke();
    textSize(35);
    fill("green");
    text("SCORE: " + score,width-300,50);
  }
  Engine.update(engine);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  striker.display();
  chain.display();

}

function mouseDragged()
{
  if(gameState !== "launched")
  {
    Matter.Body.setPosition(striker.body,{x: mouseX,y: mouseY});
  }
}

function mouseReleased()
{
  chain.fly();
  gameState = "launched";
}

function keyPressed()
{
  if(keyCode == 32)
  {
    Matter.Body.setPosition(striker.body,{x: 100, y: 300})
    chain.attach(striker.body);
    gameState = "onSling";
  }
}

async function getBackgroundImg()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=6 && hour<=19)
  {
    bg = "sprites/white.png";
  }
  else
  {
    bg = "sprites/black.png";
  }

  backGroundImg = loadImage(bg);
}

