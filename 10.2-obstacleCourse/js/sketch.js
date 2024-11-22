let myObstacles = []
let myFly
let gameOver = false

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  for(let i=0; i<10; i++){
    myObstacles.push( new Obstacle() )
  }
  myFly = new Fly()
}

function draw() {
  background(220);
  for(let i=0; i < myObstacles.length; i++){
    myObstacles[i].update()
    myObstacles[i].display()
  }
  myFly.update()
  myFly.display()

  //check collision
  for(let i=0; i < myObstacles.length; i++){
    myObstacles[i].checkCollision(myFly.x,myFly.y)
  }
}

class Obstacle{
  constructor(){
    this.x = width+random(100,300)
    this.y = random(20,height-100)
    this.speed = random(0.5,1)
    this.size = random(40,60)
    // this.doFill = true
    this.fill = 0
  }

  update(){
    if(gameOver == false){
      this.x-=this.speed
    }
    
    if(this.x<-100){
      this.x = width+random(100,300)
      this.y = random(20,height-100)
      this.size = random(40,60)
      this.doFill = !this.doFill
      this.speed = random(0.5,1)
    } 
    // if(this.doFill == true){
    //   this.fill = 0
    // }else{
    //   this.fill = 220
    // }
  }

  display(){
    push()
      translate(this.x,this.y)
      stroke(0)
      fill(this.fill)
      rect(0,0,this.size,this.size)
    pop()
  }
  checkCollision(otherX,otherY){
    //check collision with other object
    if(otherX > this.x 
      && otherX< this.x+this.size 
      && otherY > this.y 
      && otherY < this.y+this.size){
      console.log("COLISSSSIONNNNNNNNNNNNN!!!!!")
      gameOver = true
    }
  }
}

class Fly{
  constructor(){
    this.x = width/3
    this.y = height/2
    this.speedY = 0
    this.r = 3
  }
  update(){
    if(this.y < height-this.r){
      this.speedY += 0.1
    }
    
    if(keyIsPressed == true && key == "w"){
      this.speedY -= 0.2
    }
    this.y += this.speedY
    if(this.y >= height-this.r){
      this.y = height-this.r;
    }
  }
  display(){
    push()
      translate(this.x,this.y)
      circle(0,0,this.r*2)
    pop()
  }
}