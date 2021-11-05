

class Ball {
  constructor(x, y, z, index) {
    this.pos = createVector(x, y, z);
    this.vel = createVector(0, 0, 0);
    this.acc = createVector(0, 0, 0)
    this.distance
    this.r = 16
    this.index = index
    this.test
    this.color = color(255)
    this.destroyTime
    this.movingForward = false //ball's moving direction
    this.served = false;

  }

  edges() {
    let resize = 4
    if (this.pos.y <= -bounds.y + this.r) {
      a_ballWithTable.play()
      this.pos.y = -bounds.y + this.r;
      this.vel.y *= -1;
      this.vel.y += 0.7
    }

    if (this.pos.x >= bounds.x - this.renderZ()) {
      this.pos.x = bounds.x - this.renderZ();
      this.vel.x *= -1;
    } else if (this.pos.x <= -bounds.x + this.renderZ()) {
      this.pos.x = -bounds.x + this.renderZ();
      this.vel.x *= -1;
    }

    if (this.pos.z >= bounds.z - this.r) { //opponent play
      // this.destroyTime = millis() + destroySeconds * 1000
      // ballsToBeDestoried.push(ball)
      // ball = 0;
      // this.fly()
      // this.render()
      this.pos.z = bounds.z - this.r;
      this.vel.z *= -1;
      this.movingForward = false
      // console.log(this.movingForward +" || "+ frameCount)
      if(this.served){
        a_ballWithPaddle.play()
      }
    } else if (this.pos.z <= -bounds.z + this.r) {//I play
      // this.pos.z = -bounds.z + this.r;
      // this.vel.z *= -1;
      if(this.served){
        myPaddle.returned();
        this.movingForward = true
        // console.log(this.movingForward +" || "+  frameCount  +" ||Iplay ")
      }
      
    }
  }

  serve() {
    


    
    let x = map(mouseX, 0, 400, -0.5, 1)
    this.vel = createVector(x, -5, 4)
    
    a_ballWithPaddle.play()
    this.served = true
    this.movingForward = true;
  }

  applyForce(force) {
    this.acc.add(force)
  }

  updatePosition() {
    let gravity = createVector(0, -0.9, 0);
    this.applyForce(gravity)
    if (mouseIsPressed) {
      if(this.served == false)
      this.serve();
    }
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.set(0, 0, 0)
    this.edges();

  }

  fly(){
    let gravity = createVector(0, -0.3, 0);
    this.applyForce(gravity)
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.set(0, 0, 0)
  }

  render() {


    let x = this.renderX();
    let y = this.renderY();
    let w = this.renderZ();

    // console.log(y)S
    push()
    fill(this.color)
    ellipse(x, y, w)
    fill('black')
    // text(int(this.index), x, y)
    text(this.vel.x, 0, 80)
    text(int(this.vel.y), 0, 100)
    text(int(this.vel.z), 0, 120)
    text(this.vel.mag(), 0, 140)
    pop()
    return createVector(x, y)
  }

  renderX() {
    let z1 = 400;
    let z2 = this.pos.z - camera.pos.z
    let x1 = 200;
    let x3 = x1 * z2 / z1;
    let xr = 400 * this.pos.x / x3
    return xr
  }
  renderY() {
    let a1 = 45
    let v1 = createVector(camera.lookV.y, camera.lookV.z)
    let v2 = this.pos.copy().sub(camera.pos)
    v2 = createVector(v2.y, v2.z)


    let a2 = v1.angleBetween(v2)
    this.test = a2
    let yr = tan(a2) / tan(a1) * 200
    // console.log(v1 +"||" + v2 + "|||" + a2)
    return yr
  }
  renderZ() {
    this.distance = camera.pos.dist(this.pos)
    // this.color = map(this.pos.z, bounds.z, -bounds.z, 0, 255)

    return max(0, map(this.distance, 0, 400, 2*this.r, this.r))
  }

  destroy() {
    this.fly()
    this.render()


    if (millis() > this.destroyTime) {
      ball = new Ball(10, 50, -200, -1);
      ballsToBeDestoried.shift();

    }
  }
}