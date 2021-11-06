class Opponent {
    constructor() {
        this.pos = createVector(0, -160, 200)
        this.r = 32

    }

    render() {
        this.pos.x = ball.pos.x
        this.pos.y = ball.pos.y
        let x = this.renderX();
        let y = this.renderY();
        let w = this.renderZ();

        push()
        fill('blue')
        ellipse(x, y, w*5)

        pop()
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

