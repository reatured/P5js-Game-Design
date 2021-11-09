let ball
let ballsToBeDestoried = []
let camera
let bounds
let w = 600
let h = 400
let img
let ienumerators = []
let destroySeconds = 0.8
let a_ballWithTable
let a_ballWithPaddle
let opponent
let myPaddle
let canHitBall = true;
let capsule = null
let hitPoint = null
let sceneState = 0
let scene = null
let mousePositionAdj
let gameUI


function preload() {
  a_ballWithTable = loadSound('Audios/BallHTable.mp3')
  a_ballWithPaddle = loadSound('Audios/BallHPaddle.mp3')
}
function setup() {
  rectMode(CENTER)
  angleMode(DEGREES)
  createCanvas(w, h);
  mousePositionAdj = createVector(- w/2,  - h/2)
  textAlign(CENTER, CENTER);

  translate(w / 2, h / 2)
  scene = new Scene0()
  sceneState = 0;
  // 
}

function draw() {


  translate(w / 2, h / 2)
  background(209, 162, 33);

  scene.render()
}

function scene1() {
  scene = new Scene1()
  sceneState = 1
}

function scene2(){
  scene = new Scene2()
  sceneState = 2
}

function scene3(winState){
  scene = new Scene3(winState)
  sceneState = 3
}

function myDebugger() {
  let x = 220
  let y = -180
  let w = 100;
  let h = 50

  rect(x, y, w, h)
  push()
  strokeWeight(10)
  point(x + w / 2, y + h)
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