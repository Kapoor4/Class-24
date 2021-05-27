class Pigs{

    constructor(xPigs,yPigs){
    
    var obj3={
    restitution: 0.8,
    friction: 0.3,
    density:1.2
    }
    
    this.body = Bodies.rectangle(xPigs,yPigs,50,50, obj3);
    this.width = 50;
    this.height = 50;
    world.add(myWorld, this.body);
    
    
    }
    
    display(){
        
        push ();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER)
        stroke("white");
        strokeWeight(4);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop ();
    }
    
    }