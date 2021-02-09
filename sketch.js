const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(650,590,1350,15);
  ground2 = new ground(450,490,300,15);
  
  ball1 = new Ball(150,20,70,70)



  box1 = new Box(350,480,50,50);
  box2 = new Box(400,480,50,50);
  box3 = new Box(450,480,50,50);
  box4 = new Box(500,480,50,50);
  box5 = new Box(550,480,50,50);
  
  
  box6 = new Box(375,400,50,50);
  box7 = new Box(425,400,50,50);
  box8 = new Box(475,400,50,50);
  box9 = new Box(525,400,50,50);

  box10 = new Box(400,320,50,50);
  box11 = new Box(450,320,50,50);
  box12 = new Box(500,320,50,50); 


  rope1 = new Rope(ball1.body,{x:150,y:1});
  
  
  
}

function draw() {
  background("black");
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ball1.display();

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
  
  
  
  
  
  rope1.display();

}


function mouseDragged() {
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});  
}


