class Ball {
  constructor(x, y, z, index) {
    this.pos = createVector(x, y, z);
    this.vel = createVector(0, 0, 0);
    this.acc = createVector(0, 0, 0)
    this.distance
    this.r = 32
    this.index = index
    this.test
    this.color = color(255)
  }

  edges() {
    let resize = 4
    if (this.pos.y <= -bounds.y + this.r) {
      this.pos.y = -bounds.y + this.r;
      this.vel.y *= -1.01;
    }

    if (this.pos.x >= bounds.x - this.renderZ()) {
      this.pos.x = bounds.x - this.renderZ();
      this.vel.x *= -1;
    } else if (this.pos.x <= -bounds.x + this.renderZ()) {
      this.pos.x = -bounds.x + this.renderZ();
      this.vel.x *= -1;
    }

    if (this.pos.z >= bounds.z - this.r) {
      this.pos.z = bounds.z - this.r;
      this.vel.z *= -1;
      bounds.backFace();
    } else if (this.pos.z <= -bounds.z + this.r) {
      this.pos.z = -bounds.z + this.r;
      this.vel.z *= -1;
      bounds.frontFace();
    }
  }

  applyForce(force) {
    this.acc.add(force)
  }

  updatePosition() {
    let gravity = createVector(0, -0.2, 0);
    this.applyForce(gravity)
    if (mouseIsPressed) {
      let wind = createVector(0.02, 0, 0.02)
      this.applyForce(wind)
    }
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.set(0, 0, 0)
    this.edges();

  }

  render() {
    

    let x = this.renderX();
    let y = this.renderY();
    let w = this.renderZ();
    
    // console.log(y)S
    push()
    fill(this.color)
    ellipse(x, y, w)
    text(int(this.index), x, y)
    text(int(this.pos.x), x, 100)
    text(int(this.pos.z), x, 120)
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
    this.color = map(this.pos.z, bounds.z, -bounds.z, 0, 255)

    return max(0, map(this.distance, 0, 400, this.r, this.r / 2))
  }
}