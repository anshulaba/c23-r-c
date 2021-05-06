class ground{
    constructor()
    {
        var ground_options ={
            isStatic: true
        }
    
        this.ground = Bodies.rectangle(200,390,200,20,ground_options);
        World.add(world,this.ground);
    }

    display()
    {

       var pos =this.ground.position;
   
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, 200,20);
    }
}