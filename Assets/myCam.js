class MyCam{
    constructor(){
      this.pos = createVector(0,100,-450)
      this.lookAt = createVector(0,0, 0)
      this.lookAngle = 45
      this.lookV = this.lookAt.sub(this.pos)
  
    } 
  }