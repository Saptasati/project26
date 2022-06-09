class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			
			bodyA:body1,
			bodyB:body2,
			
			
			
		
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
		
		
		

		

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		
        push()
		translate()
		strokeWeight(1);
        stroke("black");
		line(pointB.x,pointB.y,pointA.x,pointA.y)
		pop()
		
		
		}

}