/*
This class is like referee and the table
0. Detect when the ball hit the table, is it in or not ??\\>>>>>Add this!
**This class doesn't change ball's direction
1. If it's out, add the ball to be destoried, and call fly()
2. Initialize a new ball to the Ball
3. Count score
4. Decide win stats. 
5. Render net and table

*/

class Bounds {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.pivots = []
        this.netHight = 60

        this.populate()
    }

    populate() {
        let array = []
        for (let i = 0; i < 8; i++) {
            let j = floor(i / 4)
            let x = this.x * pow(-1, j + 1)
            j = floor(i / 2)
            let y = this.y * pow(-1, j + 1)
            let z = this.z * pow(-1, i + 1)
            array.push(new Ball(x, y, z, i))
        }
        let x = -this.x
        let y = -this.y + this.netHight
        let z = 0
        array.push(new Ball(x, y, z, 8))
        y = -this.y
        array.push(new Ball(x, y, z, 9))
        x = -x

        array.push(new Ball(x, y, z, 10))
        y += this.netHight
        array.push(new Ball(x, y, z, 11))
        this.getRenderResult(array)

    }

    getRenderResult(array) {
        for (let i = 0; i < array.length; i++) {
            this.pivots.push(array[i].render())
        }
        console.log(this.pivots)
console.log("test")
    }


    render() {
        this.table()


    }

    bounceCheck() {
        

        let tableHeight = -this.y + ball.r


        if (ball.pos.y <= tableHeight) {
            
            if (ball.bounceCount > 1) { 
                if (ball.movingForward) {
                    if (ball.pos.z < 0) {
                        gameUI.iLose()
                        ball.netBall = true
                        ball.losePoint(0)
                        console.log("I lose, net ball" + frameCount)
                        return
                    }

                } else {
                    if (ball.pos.z > 0) {
                        gameUI.iWin()
                        ball.netBall = true
                        ball.losePoint(0)
                        console.log("I win, net ball" + frameCount)
                        return
                    }
                }



            }



            if (ball.pos.x > this.x || ball.pos.x < -this.x) {


                if (ball.movingForward == true) {
                    console.log("I lose, out xx" + frameCount)
                    console.log(ball.movingForward)
                    gameUI.iLose()
                } else {
                    console.log("I win, out" + frameCount)
                    console.log(ball.movingForward)
                    gameUI.iWin()

                }
                ball.losePoint(1)

                return "out"
            }
            ball.bounce()
            
            if (ball.pos.y <= tableHeight) {
                ball.pos.y = tableHeight
                ball.fromPos.y = tableHeight

            }


        }

        let netHeight = -this.y + ball.r + this.netHight

        if (ball.passNet == false) {

            if (ball.movingForward) {


                if (ball.pos.z > 0) {

                    ball.passNet = true
                    if (ball.pos.y < netHeight) {
                        gameUI.iLose()
                        ball.netBall = true
                        ball.losePoint(0)
                        console.log("I lose, net ball" + frameCount)

                        return "net"

                    }
                }
            } else if (!ball.movingForward) {
                if (ball.pos.z < 0) {
                    ball.passNet = true
                    if (ball.pos.y < netHeight) {
                        gameUI.iWin()
                        ball.netBall = true
                        ball.losePoint(0)
                        console.log("I win, net ball" + frameCount)

                        return "net"

                    }
                }
            }




        }


    }

    referee() {

        if (ball.pos.z >= this.z - ball.r) { //opponent play
            if (ball.bounced) {
                ball.vel = createVector(random(-1, 1), 12, -8)
                ball.movingForward = false
                ball.passNet = false
                ball.bounced = false
                if (ball.served) {
                    a_ballWithPaddle.play()
                }
            } else {
                ball.losePoint(1)
                console.log("I lose, out" + frameCount)
                gameUI.iLose()
                return "out"
            }

        } else if (ball.pos.z <= -this.z + ball.r) {//I play
            if (ball.bounced) {
                if (ball.served && ball != 0) {
                    myPaddle.returned();
                    if (ball != 0) {
                        ball.movingForward = true
                    }
                }
            } else {
                ball.losePoint(1)

                console.log("I win, out" + frameCount)
                gameUI.iWin()
                return "out"
            }


        }



    }

    table() {
        push()
        fill(19, 41, 156)
        stroke(255)
        strokeWeight(4)
        push()
        rectMode(CORNER)
        quad(
            this.pivots[0].x,
            this.pivots[0].y + 15,
            this.pivots[0].x + 30,
            this.pivots[0].y + 15,
            this.pivots[0].x + 31,
            this.pivots[0].y + 50,
            this.pivots[0].x + 2,
            this.pivots[0].y + 50,
        )

        quad(
            this.pivots[4].x - 30,
            this.pivots[4].y + 15,
            this.pivots[4].x,
            this.pivots[4].y + 15,
            this.pivots[4].x - 2,
            this.pivots[4].y + 50,
            this.pivots[4].x - 31,
            this.pivots[4].y + 50,

        )


        pop()
        quad(
            this.pivots[0].x,
            this.pivots[0].y + 15,
            this.pivots[0].x,
            this.pivots[0].y,
            this.pivots[4].x,
            this.pivots[4].y,
            this.pivots[4].x,
            this.pivots[4].y + 15
        )
        quad(
            this.pivots[1].x,
            this.pivots[1].y,
            this.pivots[0].x,
            this.pivots[0].y,
            this.pivots[4].x,
            this.pivots[4].y,
            this.pivots[5].x,
            this.pivots[5].y
        )

        line(
            0,
            this.pivots[1].y,
            0,
            this.pivots[0].y,
        )
        pop()

    }

    net() {
        push()
        fill(200, 200, 255, 150)
        quad(
            this.pivots[8].x,
            this.pivots[8].y,
            this.pivots[9].x,
            this.pivots[9].y,
            this.pivots[10].x,
            this.pivots[10].y,
            this.pivots[11].x,
            this.pivots[11].y
        )
        pop()
    }


}