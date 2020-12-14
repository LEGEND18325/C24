class Pig{

constructor(x,y){

var option2={

restitution:0.8,
density:1.0,
friction:0.3

}
this.body=Bodies.rectangle(x,y,50,50,option2)
this.width=50;
this.height=50;
World.add(world,this.body)


}

display(){
var p=this.body.position;
push();
translate(p.x,p.y)
rotate(this.body.angle)
rectMode(CENTER)
fill("green")
rect(0,0,this.width,this.height)
pop();
}


}