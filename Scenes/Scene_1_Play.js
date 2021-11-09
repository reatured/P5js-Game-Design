class Scene1 {
  constructor() {
    camera = new MyCam();

    myPaddle = new Paddle(createVector(mouseX, mouseY))
    ball = new Ball(10, 50, -180, -1);
    bounds = new Bounds(50, 200, 200)
    // bounds.populate();
    opponent = new Opponent()
    this.hasBall = true
    cursor('grab')
    gameUI = new UI()
    console.log("Done")
  }

  render() {//main update every frame
    

    opponent.render();
    bounds.render();


    if (ball != 0) {
      ball.updatePosition();
      bounds.bounceCheck()

    }

    if (ball != 0) {
      ball.render();
      if (ball.served) {
        bounds.referee()
      }

      

    }



    if (ball == 0) {
      bounds.net()
    }


    if (capsule != null) {
      capsule.render()
    }

    if (hitPoint != null) {
      hitPoint.render()
    }
    for (let i = 0; i < ballsToBeDestoried.length; i++) {

      ballsToBeDestoried[i].destroy();
    }

    myPaddle.updatePos();
    gameUI.checkWin()
    gameUI.render()

  }
}