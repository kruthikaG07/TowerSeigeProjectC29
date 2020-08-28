const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground2,block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25,circle;
var engine,world;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  ground1 = new Ground(355,350,170,10);
  ground2 = new Ground(620,230,135,10); 
  //bottom level of bigger tower
  block1 = new Box(295,325,30,40);
  block2 = new Box2(325,325,30,40);
  block3 = new Box(355,325,30,40);
  block4 = new Box2(385,325,30,40);
  block5 = new Box(415,325,30,40);
  //level 4 of bigger tower
  block6 = new Box2(310,285,30,40);
  block7 = new Box(340,285,30,40);
  block8 = new Box2(370,285,30,40);
  block9 = new Box(400,285,30,40);
  //level 3 of bigger tower
  block10 = new Box2(325,245,30,40);
  block11 = new Box(355,245,30,40);
  block12 = new Box2(385,245,30,40);
  //level 2 of bigger tower
  block13 = new Box(340,205,30,40);
  block14 = new Box2(370,205,30,40);
  //top level of bigger tower
  block15 = new Box(355,165,30,40); 
  // bottom level of smaller tower
  block16 = new Box2(575,205,30,40);
  block17 = new Box(605,205,30,40);
  block18 = new Box2(635,205,30,40);
  block19 = new Box(665,205,30,40);
  // level 3 of smaller tower
  block20 = new Box2(590,165,30,40);
  block21 = new Box(620,165,30,40);
  block22 = new Box2(650,165,30,40);
  // level 2 of smaller tower
  block23 = new Box(605,125,30,40);
  block24 = new Box2(635,125,30,40);
  //top level of smaller tower
  block25 = new Box(620,85,30,40);

circle = Bodies.circle(100,200,15);
    World.add(world,circle);

  slingshot = new Slingshot(circle,{x:100,y:200})
}

function draw() {
  rectMode(CENTER);
  background(56, 44, 44);  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  ground1.display();
  ground2.display();
  ellipseMode(RADIUS)
  fill("brown");
  ellipse(circle.position.x,circle.position.y,15,15);
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(circle,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}