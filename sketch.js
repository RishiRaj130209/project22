const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5


function setup() {
	createCanvas(800, 600);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	var roof_options={
		isStatic:true			
	}
    roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	var bob_options={
		"restitution":0.4
		//"isStatic":true
	}
	bob1 = Bodies.circle(325,250,40,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(365,250,40,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(405,250,40,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(445,250,40,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(485,250,40,bob_options);
	World.add(world,bob5);

    rope1 = new Rope(roof.position.x,roof.position.y,bob1.position.x,bob1.position.y);
	rope2 = new Rope(roof.position.x,roof.position.y,bob2.position.x,bob2.position.y);
	rope3 = new Rope(roof.position.x,roof.position.y,bob3.position.x,bob3.position.y);
	rope4 = new Rope(roof.position.x,roof.position.y,bob4.position.x,bob4.position.y);
	rope5 = new Rope(roof.position.x,roof.position.y,bob5.position.x,bob5.position.y);

	Engine.run(engine);
	
  
}

function draw() {
  //rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.diplsay()
  rope2.diplsay()
  rope3.diplsay()
  rope4.diplsay()
  rope5.diplsay()


  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,40);
  ellipse(bob2.position.x,bob2.position.y,40);
  ellipse(bob3.position.x,bob3.position.y,40);
  ellipse(bob4.position.x,bob4.position.y,40);
  ellipse(bob5.position.x,bob5.position.y,40);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
