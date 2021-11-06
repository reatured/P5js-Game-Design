class Scene1 {
    constructor() {
        camera = new MyCam();
        bounds = new Bounds(50, 200, 200)
        myPaddle = new Paddle(createVector(mouseX, mouseY))
        ball = new Ball(10, 50, -180, -1);
        bounds.populate();
        opponent = new Opponent()

    }

    render() {
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
          }
          
          if(capsule != null){
            capsule.render()
          }
        
          if(hitPoint != null){
            hitPoint.render()
          }
        
          myPaddle.updatePos();
    }
}