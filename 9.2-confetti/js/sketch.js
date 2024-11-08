let confettis = [];
let numConfetti = 1;
let backgroundHUE;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  
  // for(let i = 0; i < numConfetti; i++){
  //   confettis.push(new Confetti(width/2,height/2))
  // }
  

  backgroundHUE = random(255)
  colorMode(HSB)

}

function draw() {
  background(backgroundHUE,10,190);

  //for(let i = 0; i < numConfetti; i++){
  //  confettis.push(new Confetti(width/2, height/2))
  //}
  fill(0)
  text(confettis.length,20,20)

  // if(mouseIsPressed == true){
  //   confettis.push(new Confetti(mouseX,mouseY))
  // }

  confettis.push(new Confetti(mouseX,mouseY))

  for(let i = 0; i < confettis.length; i++){
    confettis[i].update();
    confettis[i].display();
  }
  
  //if reaches 20,delete 1
  //if(confettis.length>200){
  //   //delete the oldest confetti object from the array
  //   //*.splice(starting point,numbers to delete)
  //   confettis.splice(0,1)
  // }

  //AS LONG AS bigger than 20, delete until 20 again
  // while(confettis.length>1000){
  //   confettis.splice(0,1)
  // }

  //delete confetti when out of canvas
  for(let i = confettis.length-1; i>=0; i--){
    //check if it's on canvas
    if(confettis[i].onCanvas == false){
      //if not on canvas, delete!
      confettis.splice(i,1)
    }
    
  }

}

class Confetti{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    
    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);   
    
    this.hue = random(255)

    this.onCanvas = true;
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    this.speedY+=0.1
    this.speedX*=0.99
    if(this.y>height){
      this.onCanvas = false
    }
  }
  display(){    
    push();
    translate(this.x, this.y);

      fill(this.hue,255,255);
      noStroke();
      circle(0, 0, this.size);
   
    pop();
  }

}

// function mousePressed(){
//   for(let i = 0; i < numConfetti; i++){
//     confettis.push(new Confetti(width/2, height/2))
//   }
// }





