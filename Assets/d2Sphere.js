class d2Sphere{
    constructor(x,y,r){
      this.x = x
      this.y = y
      this.r = r
      this.color
      
    }
    
    render(){
      fill('white')
      strokeWeight(1)
      push()
      fill(this.color)
      ellipse(this.x, this.y, this.r)
      
      pop()
    }
    
  }