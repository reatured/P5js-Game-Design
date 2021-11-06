class Paddle {
    constructor(mousePosition) {
        this.pos = mousePosition
        this.startPos = createVector(mouseX, mouseY)
        this.endPos = createVector(mouseX, mouseY)
        this.hitArea = false
        this.r = 30
    }

    updatePos() {
        // let movement = createVector(mouseX - 200, mouseY - 200)
        // movement.sub(this.pos)
        // // movement.limit(3)
        this.pos = createVector(mouseX - w/2, mouseY - h/2)
        this.render()
        // console.log(this.hitArea +" || "+  frameCount  +" ||Iplay ")
        //entering hit area, 
        //ball is not moving forward
        if(ball.pos.z <-50 && this.hitArea == false && ball.movingForward == false){
            this.startPos = createVector(mouseX, mouseY)
            if(capsule != null){
                capsule.x = mouseX - w/2
                capsule.y = mouseY - h/2

            }
            
            this.hitArea = true
            ball.color = 'red'

            
        }
    }

    render() {
        ellipse(this.pos.x, this.pos.y, this.r)

        // push()
        // fill('yellow')
        // ellipse(this.startPos.x - 200, this.startPos.y - 200, 30)
        // fill('purple')
        // ellipse(this.startPos.x + this.endPos.x -200, this.startPos.y + this.endPos.y-200 , 30)
        // pop()
       
    }

    returned(){
        a_ballWithPaddle.play()
        this.hitArea = false
        this.endPos = createVector(mouseX, mouseY)
        //unadjusted coordinates. Will adjust under capsule
        capsule = new Capsule(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y, this.r) 
        // hitPoint = new d2Sphere

        this.endPos.sub(this.startPos)
        let x = map(this.endPos.x, 0, 100, 0, 1)
        let y = map(this.endPos.y, 0, 30, 0, -3)
        y = min(20, y)
        // let y = map(endPos.y, )
        // let z = 
        let returnVel =  createVector(x, y, 8)
        ball.movingForward = true
        ball.vel = returnVel
        ball.color = 'white'

    }
}