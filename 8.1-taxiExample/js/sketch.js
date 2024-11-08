let taxi; //cookie dough

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  
  taxiInstance = new Taxi(50,300,0.5);//make an instance / make a cookie / make a copy
  console.log(taxiInstance)
}

function draw() {
  background(220);
  taxiInstance.update()
  taxiInstance.display();//call the object's method
}

class Taxi{
  //inside a class we list all its functions/methods
  //one method is special, beacuse it:
  //1.must exist in EVERY class
  //2.it contains all the classes' properties
  constructor(startX,startY,s){
    //taxi's properties
    this.x = startX;
    this.y = startY;
    this.scaleFactor = s;
    this.antennaAngle = 0
    this.antennaSpeed = 2
  }

  update(){
    this.antennaAngle+=this.antennaSpeed
  }

  display(){
    push();
    translate(this.x,this.y)
    scale(this.scaleFactor);

    noStroke();
    fill(240, 220, 60);

    // base:
    rect(-50, -50, 100, 30);
    // top"
    rect(-25, -70, 50, 20);
    // wheel 1:
    this.drawWheel(-30, -15);
    // wheel 2:
    this.drawWheel( 30, -15);

    // antenna
    push();
    translate(0, -70);
    rotate(radians(this.antennaangle));

    stroke(0)
    line(0, 0, 50, 0);
    fill("green")
    circle(0, 0, 5)
    pop();

    // just to see origin 
    // of translation matrix:
    fill("red");
    circle(0, 0, 5); 

    pop()
  }

  drawWheel(x, y){
    push();
    translate(x, y);
    
      noStroke();
      fill(0);
      // circle(0,0,30);
      ellipse(0,0,28, 32);
    
    pop();
  }
}