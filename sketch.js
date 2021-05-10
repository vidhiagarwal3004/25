const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(700, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box2 = new Box(600,495,150,15);
	box3 = new Box(685,420,15,170);
	box1 = new Box(525,420,15,170);
	
	ground1 = new Ground(10,550,1400,30);
	
	paper1 = new Paper(150,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,500,330,200,200);
	paper1.display();
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-90});

		}
	}



