class d2Sphere{
    constructor(x,y,r){
      this.x = x
      this.y = y
      this.r = r
      
      
    }
    
    render(){
      fill('white')
      this.x = mouseX
      this.y = mouseY
      strokeWeight(1)
      ellipse(this.x, this.y, this.r)
      
      
    }
    
  }