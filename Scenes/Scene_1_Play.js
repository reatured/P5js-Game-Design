class Scene1 {
  constructor() {
    camera = new MyCam();

    myPaddle = new Paddle(createVector(mouseX, mouseY))
    ball = new Ball(10, 50, -180, -1);
    bounds = new Bounds(50, 200, 200)
    // bounds.populate();
    opponent = new Opponent()
    this.hasBall = true
  }

  render() {//main update every frame
    for (let i = 0; i < ballsToBeDestoried.length; i++) {
      ballsToBeDestoried[i].destroy();
    }

    opponent.render();
    bounds.render();


    if (ball!= 0) {
      ball.updatePosition();
      bounds.bounceCheck()
      ball.render();
      if(ball.served){
        bounds.referee()
      }
      
      

    }




    if (capsule != null) {
      capsule.render()
    }

    if (hitPoint != null) {
      hitPoint.render()
    }


    myPaddle.updatePos();
  }
}