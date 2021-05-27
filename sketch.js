const engine = Matter.Engine;
const world = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, ball;

var box1, box2, box3, box4, box5;

var ground1;

var angryBird1;

var pig1, pig2;

var log1, log2, log3, log4;


function setup() {

  createCanvas(1200,400);

  myEngine = engine.create();
  myWorld = myEngine.world;

 

  box1 = new Box(700,320,50,50);
  box2 = new Box(920,320,50,50);
  box3 = new Box(700,240,50,50);
  box4 = new Box(920,240,50,50);
  box5 = new Box(810,160,70,70);

  ground1 = new Ground(width/2,height,width,40);

  angryBird1 = new AngryBirds(100,200);

  pig1 = new Pigs(810,350);
  pig2 = new Pigs(810,220);

  log1= new Logs(810,260,300,PI/2);
  log2 = new Logs(810,180,300, PI/2);
  log3 = new Logs(780,120,130, PI/7);
  log4 = new Logs(870,120,130, -PI/7);


  console.log(box1);

 

}

function draw() {

  background(0); 
  
  engine.update(myEngine);

 
  box1.display();
  box2.display();
  ground1.display();
  angryBird1.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();

  
}

