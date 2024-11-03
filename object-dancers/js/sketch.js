/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Usagi(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Usagi {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //eg: this.colorRED = ...
    this.xMov 
    this.yMov 
    this.yMovAdd = 0
    this.spd = 0.2
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.xMov = 4*sin(0.4*this.spd*frameCount)
    this.yMov = -5+sin(0.8*this.spd*frameCount)
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    noStroke()
    fill(238,228,200)
    
    //tail
    noStroke()
    fill(255)
    circle(35-0.2*this.xMov,55-0.2*this.yMov,15)

    //body
    noStroke()
    fill(238,228,200)
    ellipse(0,35,85,70)
    ellipse(0+this.xMov,0+this.yMov,110,100)
    
    //ears
    noStroke()
    fill(238,228,200)
    ellipse(-20+this.xMov,-60+this.yMov,15,60)
    ellipse(20+this.xMov,-60+this.yMov,15,60)
    fill(255,192,203,200)
    ellipse(-22+this.xMov,-65+this.yMov,8,40)
    ellipse(22+this.xMov,-65+this.yMov,8,40)

    //legs
    noStroke()
    fill(238,228,200)
    ellipse(-10,70,10,20)
    ellipse(10,70,10,20)

    //arms
    push()
    noStroke()
    fill(238,228,200)
    translate(-45,35)
    rotate(10+0.03*this.xMov)
    ellipse(0,0,10,25)
    pop()
    push()
    noStroke()
    fill(238,228,200)
    translate(42,30)
    rotate(PI/2)
    ellipse(0,0+0.5*this.xMov,10,25)
    pop()

    //eyes
    noStroke()
    fill(40)
    circle(-18+this.xMov,-10+this.yMov,14)
    circle(18+this.xMov,-10+this.yMov,14)
    fill(255)
    circle(-18+this.xMov,-8+this.yMov,6)
    circle(18+this.xMov,-8+this.yMov,6)
    fill(40)
    circle(-18+this.xMov,-10+this.yMov,7)
    circle(18+this.xMov,-10+this.yMov,7)
    fill(255)
    circle(-18+this.xMov,-12+this.yMov,7)
    circle(18+this.xMov,-12+this.yMov,7)
    
    //mouth
    strokeWeight(1.7)
    stroke(40)
    fill(255,192,203)
    arc(0+this.xMov,4+this.yMov,12,30,0,PI,OPEN)
    fill(238,228,200)
    stroke(40)
    arc(-5+this.xMov,3+this.yMov,10,10,0,PI,OPEN)
    arc(5+this.xMov,3+this.yMov,10,10,0,PI,OPEN)
    line(0+this.xMov,3+this.yMov,0+this.xMov,9+this.yMov)

    //blush
    noStroke()
    fill(255,192,203,150)
    ellipse(-32+this.xMov,5+this.yMov,18,10)
    ellipse(32+this.xMov,5+this.yMov,18,10)

    //eyebrow
    stroke(40)
    noFill()
    arc(-15+this.xMov,-15+this.yMov,42,40,PI,PI*3/2,OPEN)
    arc(15+this.xMov,-15+this.yMov,42,40,PI*3/2,PI*2,OPEN)



    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/