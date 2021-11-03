let ball
let balls = []
let camera
let bounds
function setup() {
  angleMode(DEGREES)
    createCanvas(400, 400); 
    camera = new MyCam();
    bounds = new Bounds(50,200,200)

    ball = new Ball(10,100,0, -1);
    bounds.populate();
    // translate(200,200)
    // background(200);
    // for(let i = 0; i<balls.length; i++){
    //   balls[i].render();

    // }
  }
  
  function draw() {
    translate(200,200)
    background(200);
    // for(let i = 0; i<balls.length; i++){
    //   balls[i].render();

    // }
    bounds.render();
    ball.updatePosition();
    ball.render();
  }