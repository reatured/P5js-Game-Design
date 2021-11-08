/*
**This class change ball's velocity when returning
This class is like a player's paddle
Players and opponent each has a paddle
This paddle only does: 
0. Detect if the ball is hit or not
1. Return the ball >> give a caluclated velocity to the ball
2. Render paddle path, paddle, 

*/

class Paddle {
    constructor(mousePosition) {
        this.pos = mousePosition
        this.startPos = null
        this.endPos = createVector(mouseX, mouseY)
        this.hitArea = false //y between -150 and -200 or 150 and 200
        this.r = 30

    }

    updatePos() {
        // let movement = createVector(mouseX - 200, mouseY - 200)
        // movement.sub(this.pos)
        // // movement.limit(3)
        this.pos = createVector(mouseX - w / 2, mouseY - h / 2)
        this.render()
        // console.log(this.hitArea +" || "+  frameCount  +" ||Iplay ")
        //entering hit area, 
        //ball is not moving forward
        if(ball != null){
            if (ball.served) {
                if (ball.pos.z < -50 && this.hitArea == false && ball.movingForward == false) {
                    this.startPos = createVector(mouseX, mouseY)
    
                    // this.endPos = createVector(mouseX, mouseY)
                    if (capsule != null) {
                        capsule.x = mouseX - w / 2
                        capsule.y = mouseY - h / 2
                        capsule.x1 = mouseX - w / 2
                        capsule.y1 = mouseY - h / 2
                    }
    
                    this.hitArea = true
                }
    
    
            }

        }
        

        // if (this.startPos != null) {

        //     push()
        //     fill('purple')
        //     ellipse(this.startPos.x - w / 2, this.startPos.y - h / 2, 15)
        //     pop()
        // }

    }

    render() {
        ellipse(this.pos.x, this.pos.y, this.r)

    }

    returned() {

        this.hitArea = false
        this.endPos = createVector(mouseX, mouseY)
        //unadjusted coordinates. Will adjust under capsule
        capsule = new Capsule(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y, this.r)
        hitPoint = new d2Sphere(ball.hitSphere.x, ball.hitSphere.y, ball.hitSphere.z)


        if (capsule.collider(hitPoint)) {
            a_ballWithPaddle.play()
            this.endPos.sub(this.startPos)
            let x = map(this.endPos.x, 0, 100, 0, 1)
            let y = map(this.endPos.y, 0, 30, 0, -3)
            y = min(20, y)
            // let y = map(endPos.y, )
            // let z = 
            let returnVel = createVector(x, y, 10)

            ball.movingForward = true
            ball.vel = returnVel



        } else {
            ball.losePoint()

        }


    }
}