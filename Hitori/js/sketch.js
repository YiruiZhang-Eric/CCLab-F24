console.log("this thing works")
//variables for bubbles
let x1=150
let x2=230
let x3=210
let x4=430
let x5=440
let x6=660
let x7=60
let x8=586
let x9=420
let x10=700
let y1=100
let y2=250
let y3=420
let y4=200
let y5=380
let y6=160
let y7=230
let y8=300
let y9=50
let y10=400
let d1=20
let d2=15
let d3=18
let d4=14
let d5=16
let d6=22
let d7=19
let d8=25
let d9=19
let d10=23

//arrays for bubbles
let xArray1 = [];  
let yArray1 = [];
let xArray2 = [];  
let yArray2 = [];
let initialSizeOfArray1 = 5
let initialSizeOfArray2 = 5

//variations for the creature
let xC=100
let yC1=340
let yC2=0//floating control
let tC=255//transparency
let cC=250//color
let spdC=0.5//moving speed
let dest=0
let middis=0

//variables for program control
let doGameOver=false

function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container")
  
  for(let i = 0; i < initialSizeOfArray1; i++){
    xArray1[i] = random(0, width);
    yArray1[i] = random(0, height);
  }
  for(let i = 0; i < initialSizeOfArray2; i++){
    xArray2[i] = random(0, width);
    yArray2[i] = random(0, height);
  }
}

function draw() {
  background(255)
  noStroke()
  fill(118,120,141,0)
  
  rect(0,400,width,100)

  drawBackground()

  drawBackDebris()
  
  drawCreature()
  
  //interaction control
  if(mouseIsPressed == true){
    if(mouseX<width/4){
      xC=lerp(xC,dest,0.1)
      dest=width-mouseX
    }else if(mouseX>width*3/4){
      xC=lerp(xC,dest,0.1)
      dest=width-mouseX
    }else if(mouseX<width/2 && mouseX>width/4){
      xC=lerp(xC,dest,0.1)
      middis=width/2-mouseX
      dest=width-middis
    }else if(mouseX>width/2 && mouseX<width*3/4){
      xC=lerp(xC,dest,0.1)
      middis=mouseX-width/2
      dest=middis
    }
  }else{
      xC+=spdC
    if(xC>width-80){
      spdC=-spdC
    }else if(xC<80){
      spdC=-spdC
    }
  }
  
  //movement control
  yC2=sin(0.05*frameCount)
  
  drawFrontDebris()
  
  drawFloatingBubbles()
  drawFloatingDebris()
  
//fog
  fill(255,30)
  noStroke()
  rect(0,0,width,height)

//program control
  
//cursor
  if(mouseIsPressed == true){
    fill(255,48,48,200)
    noStroke()
    circle(mouseX,mouseY,40)
  }
  fill(200,200)
  noStroke()
  circle(mouseX,mouseY,20)
}

function drawBackground(){
  //background
  //background(upper part)
  for(let i=0;i<300;i++){
    bgtr=205-i*0.7
    bgy=i*0.7
    strokeWeight(0.7)
    stroke(188,193,208,bgtr)
    fill(188,193,208,bgtr)
    line(0,bgy,width,bgy)
  }
  
  //background(lower part)
  for(let i=0;i<200;i++){
    bgtr=255-i*3
    bgy=height-i*2
    strokeWeight(2)
    stroke(120,122,145,bgtr)
    fill(120,122,145,bgtr)
    line(0,bgy,width,bgy)
  }
  for(let i=0;i<200;i++){
    bgtr=255-i*3
    bgy=height-i*2
    strokeWeight(2)
    stroke(120,122,145,bgtr)
    fill(120,122,145,bgtr)
    line(0,bgy,width,bgy)
  }
  for(let i=0;i<200;i++){
    bgtr=255-i*3
    bgy=height-i*2
    strokeWeight(2)
    stroke(120,122,145,bgtr)
    fill(120,122,145,bgtr)
    line(0,bgy,width,bgy)
  }
}

function drawCreature(){
  push()//start
  
  //position and scale
  translate(xC,yC1)
  scale(0.8)
  
  //body
  noStroke()
  fill(cC,tC)
  arc(0,0+2*yC2,120,110,PI*6/8,PI*18/8,OPEN)
  
  //legs
  noStroke()
  fill(cC,tC)
  circle(-50,40+2*yC2,40)
  circle(50,40+2*yC2,40)
  circle(-17,35+4*yC2,40)
  circle(17,35+4*yC2,40)
  
  //shadow
  noStroke()
  fill(0,50)
  ellipse(0,90,120,20)
  
  //eyes
  fill(0)
  rect(-20,-20+3*yC2,3,20,5)
  rect(17,-20+3*yC2,3,20,5)
  
  //interaction control
  if(mouseIsPressed == true){
    fill(cC)
    noStroke()
    rect(-23,-23+3*yC2,46,26)
    fill(0)
    stroke(50)
    //left eye
    line(-23,-20+3*yC2,-15,-10+3*yC2)
    line(-23,0+3*yC2,-15,-10+3*yC2)
    //right eye
    line(23,-20+3*yC2,15,-10+3*yC2)
    line(23,0+3*yC2,15,-10+3*yC2)
  }
  
  //locating dot
  noStroke()
  fill("red")
  //circle(0,0,5)
  pop()//end
  
}

function drawFloatingBubbles(){
  //floating bubbles
  //bubble 1
  noStroke()
  fill(131,111,255,165)
  circle(x1,y1,d1)
  x1+=0.1
  if(x1>width+d1/2){
    x1=-d1/2
  }
  //bubble 2
  noStroke()
  fill(255,0,225,65)
  circle(x2,y2,d2)
  x2+=0.15
  if(x2>width+d2/2){
    x2=-d2/2
  }
  //bubble 3
  noStroke()
  fill(255,105,180,85)
  circle(x3,y3,d3)
  x3+=0.05
  if(x3>width+d3/2){
    x3=-d3/2
  }
  //bubble 4
  noStroke()
  fill(135,206,250,45)
  circle(x4,y4,d4)
  x4+=0.16
  if(x4>width+d4/2){
    x4=-d4/2
  }
  //bubble 5
  noStroke()
  fill(160,32,240,125)
  circle(x5,y5,d5)
  x5+=0.15
  if(x5>width+d5/2){
    x5=-d5/2
  }
  //bubble 6
  noStroke()
  fill(255,0,225,105)
  circle(x6,y6,d6)
  x6+=0.05
  if(x6>width+d6/2){
    x6=-d6/2
  }
  //bubble 7
  noStroke()
  fill(65,105,225,65)
  circle(x7,y7,d7)
  x7+=0.11
  if(x7>width+d7/2){
    x7=-d7/2
  }
  //bubble 8
  noStroke()
  fill(160,32,240,85)
  circle(x8,y8,d8)
  x8+=0.04
  if(x8>width+d8/2){
    x8=-d8/2
  }
  //bubble 9
  noStroke()
  fill(65,105,225,115)
  circle(x9,y9,d9)
  x9+=0.09
  if(x9>width+d9/2){
    x9=-d9/2
  }
  //bubble 10
  noStroke()
  fill(135,206,250,115)
  circle(x10,y10,d10)
  x10+=0.05
  if(x10>width+d10/2){
    x10=-d10/2
  }

  //more bubbles using arrays
  for(let i = 0; i < xArray1.length; i++){
    xArray1[i]+=0.1;
    fill(65,105,225,65)
    let xB1 = xArray1[i];
    let yB1 = yArray1[i];
    circle(xB1, yB1, 20);
    if(xArray1[i]>width+10){
      xArray1[i]=-10
    }
  }
  for(let i = 0; i < xArray2.length; i++){
    xArray2[i]+=0.15;
    fill(238,130,238,105)
    let xB2 = xArray2[i];
    let yB2 = yArray2[i];
    circle(xB2, yB2, 24);
    if(xArray2[i]>width+12){
      xArray2[i]=-12
    }
  }
  
}

function drawFloatingDebris(){
  push()
  translate(100,400)
  scale(1.6)
  let angle1 = frameCount*0.005
  rotate(angle1)
  noStroke()
  fill(65,105,225,188)
  triangle(-15,-40,-5,20,25,-2)
  pop()
  // push()
  // translate(105,250)
  // scale(1)
  // let angle2 = frameCount*(-0.01)
  // rotate(angle2)
  // stroke(255,200,203,200)
  // noFill()
  // triangle(-15,-40,-5,20,25,-2)
  // pop()
  
  push()
  translate(300,100)
  scale(1.2)
  let angle3 = frameCount*0.001
  rotate(angle3)
  noStroke()
  fill(255,0,225,133)
  triangle(-15,-40,-5,20,25,-2)
  pop()
  push()
  translate(303,95)
  scale(1.2)
  let angle4 = frameCount*(-0.003)
  rotate(angle4)
  stroke(255,200)
  noFill()
  triangle(-15,-40,-5,20,25,-2)
  pop()
  
  push()
  translate(80,180)
  scale(0.8)
  let angle5 = frameCount*(-0.006)
  rotate(angle5)
  noStroke()
  fill(135,206,250,133)
  triangle(-15,-40,-5,20,25,-2)
  pop()
  
  push()
  translate(680,150)
  scale(1.3)
  let angle6 = frameCount*(-0.004)
  rotate(angle6)
  noStroke()
  fill(34,230,34,138)
  triangle(-15,-40,-5,20,25,-2)
  pop()
  
  push()
  translate(500,220)
  scale(1.1)
  let angle7 = frameCount*(-0.007)
  rotate(angle7)
  noStroke()
  fill(160,32,240,138)
  triangle(-15,-40,-5,20,25,-2)
  pop()
  
  push()
  translate(700,360)
  scale(1.3)
  let angle8 = frameCount*0.008
  rotate(angle8)
  noStroke()
  fill(255,215,0,138)
  triangle(-15,-40,-5,20,25,-2)
  pop()
  
  push()
  translate(300,280)
  scale(0.9)
  let angle9 = frameCount*0.012
  rotate(angle9)
  noStroke()
  fill(255,165,0,138)
  triangle(-15,-40,-5,20,25,-2)
  pop()
}

function drawBackDebris(){
  //debris 4
  fill(58,59,80,180)
  noStroke()
  triangle(440,370,500,360,445,280)
  fill(58,59,80,100)
  triangle(440,370,500,360,458,380)
  
  //debris 5
  fill(58,59,80,160)
  noStroke()
  triangle(280,350,340,350,285,320)
  fill(58,59,80,90)
  triangle(280,350,340,350,290,360)
  
  //debris 6
  fill(58,59,80,140)
  beginShape()
  vertex(690,345)
  vertex(740,345)
  vertex(725,310)
  vertex(695,320)
  endShape()
  fill(58,59,80,80)
  beginShape()
  vertex(690,345)
  vertex(740,345)
  vertex(735,354)
  vertex(705,352)
  endShape()
  
  //debris 1
  fill(58,59,80,190)
  noStroke()
  triangle(120,385,180,380,110,320)
  fill(58,59,80,100)
  triangle(120,385,180,380,115,400)
}

function drawFrontDebris(){
  //debris 3
  fill(58,59,80,255)
  noStroke()
  triangle(540,450,670,420,610,340)
  fill(58,59,80,105)
  triangle(540,450,670,420,630,455)
  
  //debris 2
  fill(58,59,80,255)
  noStroke()
  triangle(250,440,390,445,375,370)
  fill(58,59,80,110)
  triangle(250,440,390,445,376,470)
}

