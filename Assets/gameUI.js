class UI {
    constructor() {
        this.score1 = 0
        this.score2 = 0
        this.text = "default"


    }

    render() {

        push()
        textSize(50)
        fill('white')
        textAlign(LEFT, TOP)
        text(this.score1, -200, -150)
        textAlign(RIGHT, TOP)
        text(this.score2, 200, -150)


        if (ball == 0 && sceneState == 1) {
            // console.log(ballsToBeDestoried[0].lostWay)
            switch (ballsToBeDestoried[0].lostWay) {
                case 0:
                    this.text = "Net"
                    break;
                case 1:
                    this.text = "Out"
                    break;
                case 2:
                    this.text = "You Missed"
                    break;
                default:
                    this.text = "You Lost"
                    break;
            }

            // if (ballsToBeDestoried[0].lostWay == 0) {
            //     this.text = "Net"

            // }

            push()
            fill('white')
            textAlign(CENTER, TOP)
            text(this.text, 0, -150)
            pop()
        }






        pop()
    }

    checkWin() {
        if (this.score1 >= 5 && this.score1 - this.score2 > 1) {

            scene3(true)

        } else if (this.score2 >= 5 && this.score2 - this.score1 > 1) {
            scene3(false)

        }


    }

    iWin() {
        this.score1 += 1
    }

    iLose() {
        this.score2 += 1
    }
}