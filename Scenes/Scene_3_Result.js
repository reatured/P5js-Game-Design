class Scene3 {
    constructor(winState) {
        this.button = new playButton(0, 0, 150, 50, "PLAY AGAIN")
        this.win = winState
    }

    render() {
        bounds.table()
        bounds.net()
        this.button.render()
        gameUI.render()
        textSize(50)
        switch (this.win) {
            case true:
                push()
                fill('white')
                textAlign(CENTER, TOP)
                text("Winner Winner", 0, -150)
                pop()
            case false:
                push()
                fill('white')
                textAlign(CENTER, TOP)
                text("Go Practice", 0, -150)
                pop()
        }




    }
}