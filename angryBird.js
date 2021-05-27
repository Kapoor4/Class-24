class AngryBirds{

    constructor(xAngryBirds,yAngryBirds){
    
    var obj2={
    restitution: 0.4,
    friction: 1.2,
    density:1.5
    }
    
    this.body = Bodies.rectangle(xAngryBirds,yAngryBirds,50,50, obj2);
    this.width = 50;
    this.height = 50;
    world.add(myWorld, this.body);
    
    
    }
    
    display(){
        
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        push ();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER)
        stroke("white");
        strokeWeight(4);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop ();
    }
    
    }