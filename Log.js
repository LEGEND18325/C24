class Log{

constructor(x,y,height,angle){

var option2={



    restitution:0.8,
    density:1.0,
    friction:1.0

}
this.body=Bodies.rectangle(x,y,20,height,option2)
Matter.Body.setAngle(this.body,angle)
this.width=20;
this.height=height;
World.add(world,this.body)

}

display(){

    var p=this.body.position;
push();

translate(p.x,p.y)
rotate(this.body.angle)
fill("blue")
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop();


}


}