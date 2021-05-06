const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, box1, base1, base2, ground, score = 0;

function setup() {
  createCanvas(1600,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,12000,20);

  base1 = new Ground(530,height-100,200,20);
  base2 = new Ground(1000,height-200,200,20);

polygon = Bodies.circle(50,200,20);
World.add(world, polygon);


slingshot = new SlingShot(this.polygon, {x:100,y:200});


//first row:1
  box1 = new Box(450,270,30,40);
  box2 = new Box(490,270,30,40);
  box3 = new Box(530,270,30,40);
  box4 = new Box(570,270,30,40);
  box5 = new Box(610,270,30,40);

//second row:1
  box6 = new Box(470,230,30,40);
  box7 = new Box(510,230,30,40);
  box8 = new Box(550,230,30,40);
  box9 = new Box(590,230,30,40);

//third row:1
  box10 = new Box(490, 190,30,40);
  box11 = new Box(530, 190,30,40);
  box12 = new Box(570, 190,30,40);

//fourth row:1
  box13 = new Box(510, 150,30,40);
  box14 = new Box(550, 150,30,40);

//fifth row:1
  box15 = new Box(530, 110,30,40);

//first row:2
box16 = new Box(920,170,30,40);
box17 = new Box(960,170,30,40);
box18 = new Box(1000,170,30,40);
box19 = new Box(1040,170,30,40);
box20 = new Box(1080,170,30,40);

//second row:2
box21 = new Box(940,130,30,40);
box22 = new Box(980,130,30,40);
box23 = new Box(1020,130,30,40);
box24 = new Box(1060,130,30,40);

//third row:2
box25 = new Box(960,90,30,40);
box26 = new Box(1000,90,30,40);
box27 = new Box(1040,90,30,40);

//fourth row:1
box28 = new Box(980,50,30,40);
box29 = new Box(1020,50,30,40);

//fifth row:2
box30 = new Box(1000,10,30,40);

}

function draw() {
  background(255,255,255);
  text("Score: "+score, 100, 100);
 Engine.update(engine);
  ground.display();

  base1.display();
  base2.display();
  ellipseMode(RADIUS);
  ellipse(polygon.position.x, polygon.position.y, 40, 40);

//first stack
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

//second stack
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
  box26.display();
  box27.display();

  box28.display();
  box29.display();

  box30.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode == 32){
    Matter.Body.setPosition(this.polygon, {x:50, y:200});
    slingshot.attach(this.polygon);
  }
}