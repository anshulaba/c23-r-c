 class box2
 {
   constructor(x,y,w,h)
   {
     var options = { 'restitution' : 1.0, 
                     'friction': 0.1,
                     'density' : 1.0 
                   }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world,this.body);


   }
 
   display()
   {
var pos=this.body.position;
var angle=this.body.angle;
push();
rotate(angle);
translate(pos.x,pos.y);
stroke("red");
rectMode(CENTER);
fill("cyan");
rect(0,0,this.w,this.h);
pop();
   }
 }