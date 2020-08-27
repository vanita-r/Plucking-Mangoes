var boyIMG, treeIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyIMG = loadImage("Plucking mangoes/boy.png");
	treeIMG = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1540, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	boy = createSprite(150,623,30,30);
	boy.addImage(boyIMG)
	boy.scale=0.1
	/*tree = createSprite(700,400,30,30);
	tree.addImage(treeIMG)
	tree.scale=0.5*/
	mango = new Mango(900,280,40);
	mango2 = new Mango(500,280,40);
	mango3 = new Mango(600,400,40);
	mango4 = new Mango(700,300,40);
	mango5 = new Mango(590,180,40);
	mango6 = new Mango(800,200,40);
	mango7 = new Mango(790,350,40);
	mango8 = new Mango(740,150,40);
	tree = new Tree(700,400,600,600);
	ground = new Ground(770,700,1540,20);

	//boy = new Boy(150,623,200,300);

	stone = new Stone(100,700,30);
	launcher = new Launcher(stone.body,{x:100,y:570});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(175, 231, 250);
  strokeWeight(4);
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  //boy.display();
  stone.display();
  launcher.display();
  ground.display();

  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	console.log("mouseReleased");
    launcher.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<-lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:100,y:570})
		launcher.attach(stone.body);
	}
}

