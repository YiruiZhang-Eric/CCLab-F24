let pearlTower;
let rock; 
let streetSign;
let fractures = [];

let floorX; 
let floorY;
let floorW; 

let stackTop;


function setup() {
  let canvas = createCanvas(windowWidth, 800);
  canvas.parent("p5-canvas-container");

  pearlTower = new Fracture(random(width/2, width-150), random(100, height-100), 150, 40, "pearl");
  fractures.push(pearlTower);

  rock = new Fracture(random(width/2, width-150), random(100, height-100), 50, 40, "rock");
  fractures.push(rock);

  streetSign = new Fracture(random(width/2, width-150), random(100, height-100), 100, 30, "streetsign");
  fractures.push(streetSign);

  floorX = 50;
  floorY = height-50;
  floorW = 300;
  
  stackTop = floorY;

}

function draw() {
  background(220);

  line(floorX, floorY, floorX+floorW, floorY);

  for(let i = 0; i < fractures.length; i++){
    fractures[i].update();
    fractures[i].display();
  }
  //
}




class Fracture{
  constructor(startX, startY, objectW, objectH, fractureName){
    this.x = startX;
    this.y = startY;
    this.destinationX = startX;
    this.destinationY = startY; 
    this.w = objectW;
    this.h = objectH;

    this.fractureName = fractureName;

    this.lerpSpeed = 0.2;

    this.onStack = false;

    // think about how they can have different appearances. 
  }
  update(){
    this.x = lerp(this.x, this.destinationX, this.lerpSpeed)
    this.y = lerp(this.y, this.destinationY, this.lerpSpeed)

  }
  showContent(){
    if(this.fractureName == "pearl"){
      //
    }else if(this.fractureName == "rock"){
      //
    }
  }
  display(){
    push();
    translate(this.x, this.y);


    if(this.fractureName == "pearl"){
      circle(this.w/2, this.h/2, this.h);
    }else if(this.fractureName == "rock"){
      rect(10, 10, this.h-10, this.h-10);
    }else{
      
    }
    noFill()
    rect(0, 0, this.w, this.h)
    

    pop();
  }
  goToStack(){
    if(this.onStack == false){
      this.destinationX = floorX + (floorW/2) - this.w/2;
      this.destinationY = stackTop - this.h;
      stackTop = stackTop - this.h;
      this.onStack = true;
    }
    
  }
}

function mousePressed(){
  for(let i = fractures.length-1; i >= 0; i--){
    // check clicking backwards to make sure we check the upper fractures before
    // the lower fractures

    if(
      mouseX > fractures[i].x &&
      mouseX < fractures[i].x + fractures[i].w &&
      mouseY > fractures[i].y &&
      mouseY < fractures[i].y + fractures[i].h
    ){

      // here you can play the fracture's media


      // once the media has played, tell the fracture to go to stack
      fractures[i].goToStack();

      break //stop the for loop as soon as one is detected as being clicked     
    }


  }

}