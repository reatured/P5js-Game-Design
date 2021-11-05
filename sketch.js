let ball
let ballsToBeDestoried = []
let camera
let bounds
let w = 600
let h = 400
let img
let ienumerators = []
let destroySeconds = 2
let a_ballWithTable
let a_ballWithPaddle 
let opponent
let myPaddle
let canHitBall = true;
let capsule = null
let hitPoint = null


function preload() {
  a_ballWithTable = loadSound('Audios/BallHTable.mp3')
  a_ballWithPaddle = loadSound('Audios/BallHPaddle.mp3')
}
function setup() {
  
  angleMode(DEGREES)
  createCanvas(w, h);
  camera = new MyCam();
  bounds = new Bounds(50, 200, 200)
  myPaddle = new Paddle(createVector(mouseX, mouseY))
  ball = new Ball(10, 50, -180, -1);
  bounds.populate();
  opponent = new Opponent()
}

function draw() {

  cursor('grab')

  translate(200, 200)
  background(200);

  for (let i = 0; i < ballsToBeDestoried.length; i++) {

    ballsToBeDestoried[i].destroy();
  }

  opponent.render();

  bounds.render();

  if(ball != 0){
    ball.updatePosition();

  }

  if(ball != 0){

    ball.render();
    myDebugger()
  }
  

  // ellipse(mouseX - 200, mouseY - 200, 32)

  if(capsule != null){
    capsule.render()
  }

  if(hitPoint != null){
    hitPoint.render()
  }


  myPaddle.updatePos();
  text(ballsToBeDestoried.length, 200, 140)
  
}

function myDebugger() {
  let x = 220
  let y = -180
  let w = 100;
  let h = 50

  rect(x, y, w, h)
  push()
  strokeWeight(10)
  point(x + w/2, y+h)
  pop()
  let bx = ball.pos.z
  bx = map(bx, 200, -200, x, x + w)
  let by = ball.pos.y
  by = map(by, 0, -200, y, y + h)

  push()
  strokeWeight(5)
  point(bx, by)
  pop()
  // console.log(ball.pos)
}