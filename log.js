class Logs{

    constructor(xLogs,yLogs, heightLogs, angleLogs){
    
    var obj4={
    restitution: 0.8,
    friction: 1.5,
    density:1.0
    }
    
    this.body = Bodies.rectangle(xLogs,yLogs,10,heightLogs, obj4);
    this.width = 10;
    this.height = heightLogs;
    Matter.Body.setAngle(this.body, angleLogs);
    world.add(myWorld, this.body);
    
    
    }
    
    display(){
        
        push ();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER)
        stroke("white");
        strokeWeight(4);
        fill("lightbrown");
        rect(0, 0, this.width, this.height);
        pop ();
    }
    
    }