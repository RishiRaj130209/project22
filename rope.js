class Rope{
	constructor(body1,body2,pointA,pointB)
	{
     
		this.pointA = pointA;
		this.pointB = pointB;

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}
	//create rope constraint here
    rope = Constraint.create({
		pointA:roof,
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	})
	World.add(world,rope);

	rope2 = Constraint.create({
		pointA:roof,
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	})
	World.add(world,rope2);

	rope3 = Constraint.create({
		pointA:roof,
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	})
	World.add(world,rope3);

	rope4 = Constraint.create({
		pointA:roof,
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	})
	World.add(world,rope4);

	rope5 = Constraint.create({
		pointA:roof,
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	})
	World.add(world,rope5);

	}


     display(){

		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
		
		push()
		strokeWeight(2);
		line(roof.position.x,roof.position.y,bob1.position.x,bob1.position.y)
		line(roof.position.x,roof.position.y,bob2.position.x,bob2.position.y)
		line(roof.position.x,roof.position.y,bob3.position.x,bob3.position.y)
		line(roof.position.x,roof.position.y,bob4.position.x,bob4.position.y)
		line(roof.position.x,roof.position.y,bob5.position.x,bob5.position.y)
		pop()
 
		
	 } 

}
