
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball,ball2,ball3,ball4;
var cons,con2,cons3,con4;
var btn1;
var btn2;
function setup() {
  createCanvas(900,800);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  

  
   
  
  ground =new Ground(400,20,300,20);

  


  ball2 = Bodies.circle(300,200,20,ball_options);
  World.add(world,ball2);

  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  
  ball3 = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball3);

  cons=Matter.Constraint.create
  (
   {
     pointA:{x:400,y:20},
     bodyB:ball,
     pointB:{x:0,y:0},
     length:150,
     stiffness:0.1
   }
  )
  World.add(world,cons);

  cons2=Matter.Constraint.create
  (
   {
     pointA:{x:450,y:20},
     bodyB:ball2,
     pointB:{x:0,y:0},
     length:150,
     stiffness:0.1
   }
  )
  World.add(world,cons2);

  cons3=Matter.Constraint.create
  (
   {
     pointA:{x:345,y:20},
     bodyB:ball3,
     pointB:{x:0,y:0},
     length:150,
     stiffness:0.1
   }
  )
  World.add(world,cons3);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("red");
  Engine.update(engine);
  

 fill("black");
text("use up arrow to move the ball",320,210);
 
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ground.show();
  push();
  strokeWeight(2);
  stroke(255);
  line(cons.pointA.x,cons.pointA.y,ball.position.x,ball.position.y);
  line(cons2.pointA.x,cons2.pointA.y,ball2.position.x,ball2.position.y);
  line(cons3.pointA.x,cons3.pointA.y,ball3.position.x,ball3.position.y);
  pop();
  Engine.update(engine);
}



  
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.07,y:0});
  }
}

