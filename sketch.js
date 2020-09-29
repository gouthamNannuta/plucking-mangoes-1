const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var treee,treeimg;
var boy ,boyimg;
var rock;
var chain;

function preload()
{
	treeimg=loadImage("plucking mangoes/tree.png")
	boyimg=loadImage("plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:true
	}
	//Create the Bodies Here.
    ground=new Ground(400,680,800,20);

	tree=Bodies.rectangle(610,510,options);
    boy=Bodies.rectangle(150,630,options);
	
	mango1=new Mango(560,505,30,30);
	mango2=new Mango(510,485,40,40);
	mango3=new Mango(550,470,30,30);
    mango4=new Mango(530,430,35,35);
    mango5=new Mango(560,400,40,40);
	mango6=new Mango(600,470,35,35);
	mango7=new Mango(600,420,30,30);
	mango8=new Mango(630,380,40,40);
    mango9=new Mango(650,450,40,40);
    mango10=new Mango(690,420,35,35);
	mango11=new Mango(710,460,35,35);
	
	rock=new Stone(105,575,30,30);
	chain = new Slingshot(rock.body,{x:100,y:590});	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(192,200,222);


  imageMode(CENTER);
  image(treeimg,tree.position.x, tree.position.y, 350,350);

  imageMode(CENTER);
  image(boyimg,boy.position.x, boy.position.y, 150,150);

  chain.display();
  ground.display();
  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(rock.body,{x:100,y:575})
	  chain.attach(rock.body);
	}
}


