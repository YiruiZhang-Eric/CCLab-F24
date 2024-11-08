let x1 = -50; //cloud 1
let x2 = -60; //cloud 2
let x3 = -44; //cloud 3
let smokePar = []
let smokeSum = 1


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(135,206,250);
  
  drawBackground()
  
  let angle1 = 0.2*noise(0.05*frameCount)
  let angle2 = 0.15*(-noise(0.1*frameCount))

  for(let i = 0; i < smokeSum; i++){
    smokePar.push(new Smoke(250,200))
  }

  for(let i = 0; i < smokePar.length; i++){
    if(smokePar[i].inFront == false){
      smokePar[i].display()
      smokePar[i].update()
    }
  }

  drawCampfire(angle1)
  drawCampfire(angle2)


  for(let i = 0; i < smokePar.length; i++){
    if(smokePar[i].inFront == true){
      smokePar[i].display()
      smokePar[i].update()
    }
  }

  for(let i = smokePar.length-1; i>=0; i--){
    //check if it's on canvas
    if(smokePar[i].onCanvas == false){
      //if not on canvas, delete!
      smokePar.splice(i,1)
    }
  }

  console.log(smokePar.length)
}

function drawBackground(){
  //grassfield
  noStroke()
  fill(154, 205, 50)
  rect(0,300,500,100)
  drawCloud()
  
}

function drawCampfire(angle){
  
    
    //wood
  
    noStroke()
    fill(139, 90, 43)
    push()
      translate(235,300)
      rotate(PI/18)
      rect(-50,0,120,10)
    pop()

    push()
      translate(235,300)
      rotate(PI/-6)
      rect(-50,10,95,10)
    pop()
    push()
      translate(235,300)
      rotate(PI/-22)
      rect(-50,5,110,10)
    pop()
    push()
      translate(260,320)
      rotate(PI/4)
      rect(-50,-5,70,10)
    pop()

    //fire
    push()
      translate(245,280)
      rotate(angle)
      fill("red")
      circle(0,0,60)
      triangle(-30,0,0,0,-25,-40)
      triangle(-25,0,25,0,0,-60)
      triangle(0,0,30,0,25,-45)
      fill("orange")
      arc(0,5,30,30,0,PI,OPEN)
      triangle(-15,5,15,5,0,-25)
    pop()
 
}

function drawCloud(){
  //cloud1
  noStroke();
  fill(255);
  rect(x1, 30, 60, 20, 100);
  circle(x1 + 18, 30, 20);
  circle(x1 + 35, 30, 30);
  x1 = x1 + 1;
  if (x1 > 520) x1 = -70;
  //cloud2
  noStroke();
  fill(255);
  rect(x2, 90, 60, 20, 100);
  circle(x2 + 18, 90, 20);
  circle(x2 + 35, 90, 30);
  x2 = x2 + 0.5;
  if (x2 > 520) x2 = -80;
  //cloud3
  noStroke();
  fill(255);
  rect(x3, 150, 60, 20, 100);
  circle(x3 + 18, 150, 20);
  circle(x3 + 35, 150, 30);
  x3 = x3 + 0.8;
  if (x3 > 520) x3 = -64;
}

class Smoke{
  constructor(){
    this.x = 250;
    this.y = 270;
    this.size = random(20, 30);
    
    this.speedX = random(-0.4, 0.4);
    this.speedY = random(-0.5, -1);   
    
    this.grey = random(100)
    this.tran = random(10,20)

    this.onCanvas = true;
    this.inFront = true;
    if(random()<0.5){
      this.inFront = false
    }
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    this.tran*=0.996
    this.speedX += 0.005*noise(0.05*frameCount)
    if(this.y<-100){
      this.onCanvas = false
    }
    this.size += 0.2
  }
  display(){    
    push();
    translate(this.x, this.y);

      fill(this.grey,this.tran);
      noStroke();
      circle(0, 0, this.size);
   
    pop();
  }
}