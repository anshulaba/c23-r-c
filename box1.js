class box1
{
constructor(x,y,w,h)
{
var options={'restitution':1.0}
this.body=Bodies.rectangle(x,y,w,h,options);
this.w =w;
this.h=h;
World.add(world,this.body);
}


display()
{
    var pos=this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.w,this.h);
}



}