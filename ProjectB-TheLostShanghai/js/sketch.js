//array-clouds
let clouds = [];
let cloudSum = 1;

//array-fracture
let Yangpu;
let Baoshan; 
let Chongming;
let Hongkou
let Lujiazui
let Xujiahui
let MiddleHuaihaiRd
let SuzhouCreek
let EastNanjingRd
let JinganTemple
let fractures = [];
let scaleCtrl = 1

//stacking control
let floorX; 
let floorY;
let floorW; 
let stackTop;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  console.log("current canvas size:",width,"*",height)

  //setting scale according to window width
  scaleCtrl = width/2000
  console.log("current scale:",scaleCtrl)

  drawBackground()

  pushFractures()

  floorX = width*0.4
  floorY = height*0.95
  floorW = width*0.2

  stackTop = floorY
}

function pushFractures(){

  Yangpu = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 30*scaleCtrl, 140*scaleCtrl, "AY");
  fractures.push(Yangpu);

  Baoshan = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 140*scaleCtrl, 120*scaleCtrl, "AB");
  fractures.push(Baoshan);

  Hongkou = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 140*scaleCtrl, 140*scaleCtrl, "AH");
  fractures.push(Hongkou);

  Chongming = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 140*scaleCtrl, 140*scaleCtrl, "AC");
  fractures.push(Chongming);

  Lujiazui = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 40*scaleCtrl, 135*scaleCtrl, "VL");
  fractures.push(Lujiazui);

  Xujiahui = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 140*scaleCtrl, 50*scaleCtrl, "VX");
  fractures.push(Xujiahui);

  EastNanjingRd = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 180*scaleCtrl, 60*scaleCtrl, "VE");
  fractures.push(EastNanjingRd);

  SuzhouCreek = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 140*scaleCtrl, 140*scaleCtrl, "VS");
  fractures.push(SuzhouCreek);

  MiddleHuaihaiRd = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 140*scaleCtrl, 140*scaleCtrl, "VM");
  fractures.push(MiddleHuaihaiRd);

  JinganTemple = new Fracture(random(width*0.1, width*0.9), random(height*0.7, height*0.9), 140*scaleCtrl, 140*scaleCtrl, "VJ");
  fractures.push(JinganTemple);
}

function draw() {
  background(200);

  drawBackground();

  // central reference line
  // stroke("red")
  // line(width/2,0,width/2,height)

  //drawing clouds
  for(let i = 0; i < cloudSum; i++){
    clouds.push(new cloud())
  }
  for(let i = 0; i < clouds.length; i++){
    clouds[i].display()
    clouds[i].update()
  }
  for(let i = clouds.length-1; i>=0; i--){
    //check if it's on canvas
    if(clouds[i].onCanvas == false){
      //if not on canvas, delete!
      clouds.splice(i,1)
    }
  }
  // console.log(clouds.length)
  
  // stroke(0)
  // line(floorX, floorY, floorX+floorW, floorY);

  for(let i = 0; i < fractures.length; i++){
    fractures[i].update();
    fractures[i].display();
  }
}

function drawBackground(){
  //sky part (smog)
  for(let i=0;i<height*0.8;i++){
    bgtr=205-i*0.5
    bgy=i*1
    strokeWeight(0.7)
    stroke(100,bgtr)
    fill(100,bgtr)
    line(0,bgy,width,bgy)
  }

  //ground part (desert)
  for(let i=0;i<height*0.2;i++){
    bgtr=255-i*15
    bgy=height*0.7-i*2
    strokeWeight(2)
    stroke(224,160,92,bgtr)
    fill(224,160,92,bgtr)
    line(0,bgy,width,bgy)
  }
  fill(224,160,92)
  stroke(224,160,92)
  rect(0,height*0.7,width,height*0.3)
}

class cloud{
  constructor(){
    this.x = random(width*0.6,width*0.7);
    this.y = random(0,height*0.25)
    this.speed = random(0.1,0.5)
    this.fill = random(150,200)
    this.transparency = random(20,25)
    this.onCanvas = true;
  }
  update(){
    this.x -= this.speed
    if(this.x<-50){
      this.onCanvas = false
    }
  }
  display(){
    push()
      scale(2)
      translate(this.x, this.y)
      noStroke();
      fill(this.fill,this.transparency);
      rect(0, 0, 60, 20, 100);
      circle(18, 0, 20);
      circle(35, 0, 30);
    pop()
  }
}

class Fracture{
  constructor(startX, startY, objectW, objectH, fractureName){
    this.x = startX;
    this.y = startY;
    this.destX = startX;
    this.destY = startY; 
    this.w = objectW;
    this.h = objectH;

    this.fractureName = fractureName;

    this.lerpSpeed = 0.2;

    this.onStack = false;

  }

  update(){
    this.x = lerp(this.x, this.destX, this.lerpSpeed)
    this.y = lerp(this.y, this.destY, this.lerpSpeed)

  }

  playVideo(){
    if(this.fractureName == "AY"){
      let popup = window.open("./assets/Audio/Yangpu/Yangpu.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")

      // event listener for video or media to end, when it iends close it automatialytlylryakrh
      // --> we handle this inside pop up window


      // event listener for window to be closed, only when its closed, call this.stacking() (rather than inside the mousePRessed)

      // function windowClosed(eventInfo){
      //     if(eventInfo.timeStamp > 80){
      //       console.log("it closes", this)
      //       this.stacking()

      //     }
      // }

      
 

      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)

          setTimeout(()=>{
            this.stacking()

          }, 500)

          
        }
      });


      // if(popup){

      // }
      // popup.onunload = function(){
      //   fractures[i].stacking()
      //   console.log("unload successful")
      // }
      

    }else if(this.fractureName == "AB"){
      // let popup = window.open("./assets/Audio/Baoshan/Baoshan.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      // popup.addEventListener("unload", (eventInfo)=>{
      //   if(eventInfo.timeStamp > 80){
      //     console.log("it closes", this)
      //     setTimeout(()=>{
      //       this.stacking()
      //     }, 500)
      //   }
      // });
      let popup = window.open("./assets/Video/test/test.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)
          setTimeout(()=>{
            this.stacking()
          }, 500)
        }
      });
    }else if(this.fractureName == "AH"){
      let popup = window.open("./assets/Audio/Hongkou/Hongkou.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)
          setTimeout(()=>{
            this.stacking()
          }, 500)
        }
      });
    }else if(this.fractureName == "AC"){
      let popup = window.open("./assets/Audio/Chongming/Chongming.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)
          setTimeout(()=>{
            this.stacking()
          }, 500)
        }
      });
    }else if(this.fractureName == "VE"){
      let popup = window.open("./assets/Video/EastNanjingRd/EastNanjingRd.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)
          setTimeout(()=>{
            this.stacking()
          }, 500)
        }
      });
    }else if(this.fractureName == "VJ"){
      let popup = window.open("./assets/Video/JinganTemple/JinganTemple.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)
          setTimeout(()=>{
            this.stacking()
          }, 500)
        }
      });
    }else if(this.fractureName == "VL"){
      let popup = window.open("./assets/Video/Lujiazui/Lujiazui.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)
          setTimeout(()=>{
            this.stacking()
          }, 500)
        }
      });
    }else if(this.fractureName == "VM"){
      let popup = window.open("./assets/Video/MiddleHuaihaiRd/MiddleHuaihaiRd.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)
          setTimeout(()=>{
            this.stacking()
          }, 500)
        }
      });
    }else if(this.fractureName == "VS"){
      let popup = window.open("./assets/Video/SuzhouCreek/SuzhouCreek.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)
          setTimeout(()=>{
            this.stacking()
          }, 500)
        }
      });
    }else if(this.fractureName == "VX"){
      let popup = window.open("./assets/Video/Xujiahui/Xujiahui.html", "newwindow", "width=1280 height=720 top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
      popup.addEventListener("unload", (eventInfo)=>{
        if(eventInfo.timeStamp > 80){
          console.log("it closes", this)
          setTimeout(()=>{
            this.stacking()
          }, 500)
        }
      });
    }
  }

  display(){
    push();
    translate(this.x, this.y);
    // stroke(0)
    // rect(0, 0, this.w, this.h)
    scale(scaleCtrl)
    // rect(0, 0, this.w, this.h)
    if(this.fractureName == "AY"){
      noStroke()
      fill(230)
      rect(-15,50-90,30,110)
      beginShape()
      vertex(55-70,50-90)
      vertex(55-70,30-90)
      vertex(63-70,44-90)
      vertex(67-70,41-90)
      vertex(72-70,48-90)
      vertex(75-70,39-90)
      vertex(85-70,50-90)
      endShape()
      
      fill(205,62,47)
      rect(55-70,60-70,30,10)
      fill(205,55,47)
      rect(55-70,80-70,30,10)
      fill(195,62,47)
      rect(55-70,100-70,30,10)
    }else if(this.fractureName == "AB"){
      // noFill()
      // stroke(0)
      // strokeWeight(1)
      // rect(-70,-70,140,120)


      stroke(0)
      strokeWeight(3)
      line(0,-50,-20,-70)
      line(0,-50,30,-70)
      line(30,-70,40,-55)
      
      noStroke()
      fill(139,87,66)
      rect(-70,-50,140,100)
      fill(173,216,230)
      rect(-60,-40,90,80)
      
      fill(200)
      circle(50,-30,20)
      circle(50,-5,20)
      
      fill(0)
      rect(35,10,30,5,5)
      rect(35,20,30,5,5)
      rect(35,30,30,5,5)
    }else if(this.fractureName == "AH"){
      stroke(180)
      strokeWeight(3)
      line(-30,-30,-30,70)
      line(30,-30,30,70)
      line(-30,-30,30,-30)
      line(-30,0,30,0)
      line(-30,30,30,30)
      line(-30,70,30,70)
      
      fill(205,79,57)
      stroke(205,79,57)
      textAlign(CENTER,CENTER)
      textSize(100)
      textStyle(BOLD)
      text("虹",0,0)
    }else if(this.fractureName == "AC"){
      noFill()
      stroke(255,127,36)
      strokeWeight(30)
      circle(0,0,110)
      
      stroke(255)
      fill(255)
      strokeWeight(1)
      rect(-10,-70,20,31)
      rect(-10,39,20,31)
      rect(39,-10,31,20)
      rect(-70,-10,31,20)
    }else if(this.fractureName == "VE"){
      noStroke()
      fill("blue")
      rect(-90,-30,180,60,7)
      fill(255)
      rect(-90,20,180,10,7)
      rect(-90,10,180,15)
      
      fill(255)
      textAlign(CENTER,CENTER)
      textSize(25)
      // textStyle(BOLD)
      text("南京东路",0,-9)
      fill(0)
      textSize(11)
      text("East Nanjing Rd.",0,20)
    }else if(this.fractureName == "VJ"){
      noStroke()
      fill(218,165,32)
      beginShape()
      vertex(-70,-70)
      vertex(70,-70)
      vertex(70,70)
      vertex(-40,70)
      vertex(-50,55)
      vertex(-48,20)
      vertex(-55,-23)
      vertex(-53,-55)
      endShape()
      
      fill(184,134,11)
      beginShape()
      vertex(55,-55)
      vertex(55,55)
      vertex(-40,55)
      vertex(-50,55)
      vertex(-48,20)
      vertex(-55,-23)
      vertex(-53,-55)
      endShape()
      
      fill(255,215,0)
      textAlign(CENTER,CENTER)
      textSize(70)
      text("静",0,0)
    }else if(this.fractureName == "VL"){
      // noFill()
      // stroke(0)
      // strokeWeight(1)
      // rect(-20,-70,40,135)

      noStroke()
      fill(185)
      rect(-5,10,10,40)
      fill(185)
      triangle(-4,10,4,10,0,-80)
      rect(-4,-20,8,40)
      
      strokeWeight(3)
      stroke(185)
      line(-5,-20,5,-20)
      line(-5,10,5,10)
      line(-5,30,5,30)
      
    
      
      noStroke()
      fill(222,21,90)
      arc(0,55,30,30,-PI*5/4,PI/4,OPEN)
      // circle(0,-15,25)
      // circle(0,55,30)
      
      strokeWeight(3)
      stroke(139,26,26)
      line(-14,55,14,55)
    }else if(this.fractureName == "VM"){
      noStroke()
      fill(118,21,27)
      beginShape()
      vertex(-70,-70)
      vertex(70,-70)
      vertex(60,-56)
      vertex(66,-18)
      vertex(58,33)
      vertex(70,70)
      vertex(-70,70)
      vertex(-61,32)
      vertex(-67,0)
      vertex(-63,-24)
      vertex(-70,-58)
      vertex(-60,-70)
      endShape()
      
      fill(255)
      textStyle(BOLD)
      textAlign(CENTER,CENTER)
      textSize(35)
      text("MUJI",0,-10)
      textSize(17)
      text("無印良品",0,18)
    }else if(this.fractureName == "VS"){
      stroke(150)
      strokeWeight(3)
      fill(255)
      circle(0,0,140)
      strokeWeight(5)
      line(-67,0,67,0)
      
      strokeWeight(3)
      rotate(PI/6)
      line(-67,0,67,0)
      
      strokeWeight(3)
      rotate(PI/6)
      line(-67,0,67,0)
      
      strokeWeight(5)
      rotate(PI/6)
      line(-67,0,67,0)
      
      strokeWeight(3)
      rotate(PI/6)
      line(-67,0,67,0)
      
      strokeWeight(3)
      rotate(PI/6)
      line(-67,0,67,0)
      
      strokeWeight(3)
      circle(0,0,90)
      
      strokeWeight(6)
      stroke(0)
      line(0,0,40,40)
      line(0,0,-15,12)
    }else if(this.fractureName == "VX"){
      // noFill()
      // stroke(0)
      // strokeWeight(1)
      // rect(-70,-25,140,45)
      
      noStroke()
      fill(0)
      beginShape()
      vertex(0-70,45-70)
      vertex(140-70,45-70)
      vertex(138-70,48-70)
      vertex(140-70,50-70)
      vertex(132-70,57-70)
      vertex(135-70,63-70)
      vertex(133-70,68-70)
      vertex(138-70,72-70)
      vertex(131-70,77-70)
      vertex(140-70,83-70)
      vertex(136-70,90-70)
      vertex(0-70,90-70)
      vertex(9-70,82-70)
      vertex(3-70,75-70)
      vertex(6-70,66-70)
      vertex(2-70,57-70)
      vertex(0-70,51-70)
      vertex(6-70,45-70)
      endShape()
      
      textSize(20);
      textAlign(CENTER, CENTER);
      
      fill(255)
      textSize(20);
      textAlign(CENTER, CENTER);
      text("徐家汇站",70-70,62-70)
      
      textSize(9);
      textAlign(CENTER, CENTER);
      text("Xujiahui Station",70-70,80-70)
    }
    
    pop();
  }

  stacking(){
    if(this.onStack == false){
      this.destX = floorX + (floorW/2) ;
      this.destY = stackTop - this.h;
      stackTop = stackTop - this.h;
      this.onStack = true;
    }
    
  }
}

function mousePressed(){
  for(let i = fractures.length-1; i >= 0; i--){
    // check clicking backwards to make sure we check the upper fractures before the lower fractures

    if(
      mouseX > fractures[i].x-fractures[i].w/2 &&
      mouseX < fractures[i].x + fractures[i].w/2 &&
      mouseY > fractures[i].y-fractures[i].h/2 &&
      mouseY < fractures[i].y + fractures[i].h/2
    ){

      //play the fracture's media
      fractures[i].playVideo();

      //fracture go to stack
      // fractures[i].stacking();

      break //stop the for loop    
    }


  }

}
