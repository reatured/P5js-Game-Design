class Scene0 {
    constructor() {
        camera = new MyCam();
        this.button = new playButton(0, 0, 100, 50, "PLAY")
        bounds = new Bounds(50, 200, 200)
        // bounds.populate();
    }

    render() {


        bounds.table()
        bounds.net()
        this.button.render()

    }


}

class playButton {
    constructor(x, y, w, h, text) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.rounded = 20
        this.ready = false
        this.text = text
    }

    render() {

        let mou = createVector(mouseX - w / 2, mouseY - h / 2)
        let isHovered = this.collider(mou, this.x, this.y, this.w, this.h)



        push()
        strokeWeight(4)
        if (isHovered) {

            fill(73, 127, 171)
            if (mouseIsPressed) {
                fill(73 + 100, 127 + 50, 171 + 50)
                this.ready = true
            }
            if (this.ready && !mouseIsPressed) {
                scene1()
            }
        }
        else {
            this.ready = false
            fill(73 - 50, 127 - 50, 171 - 50)
        }

        stroke('white')
        rect(this.x, this.y, this.w, this.h, this.rounded)
        textSize(20)
        strokeWeight(0)
        fill('white')
        text(this.text, this.x, this.y)
        pop()



    }

    collider(value, x, y, w, h) {//Left top conner and right bottom corner
        if (abs(value.x - x < w / 2) && abs(value.y - y < h / 2)) {
            return true
        } else {
            return false
        }
    }


}