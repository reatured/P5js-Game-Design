class Capsule {
    constructor(x, y, x1, y1, r) {
        this.x = x - w/2;
        this.y = y - h/2;
        this.x1 = x1 - w/2;
        this.y1 = y1 - h/2;
        this.r = r;
        this.vCenter = createVector(this.x1 - this.x, this.y1 - this.y);

        this.color = color(198, 252, 0, 150)
    }

    collider(object) {
        let ae = createVector(object.x - this.x, object.y - this.y);
        let be = createVector(object.x - this.x1, object.y - this.y1)
        let d
        if (ae.dot(this.vCenter) < 0) {
            d = ae.mag()
            console.log("1")

        } else if (be.dot(this.vCenter) > 0) {
            d = be.mag()
            console.log("2")

        } else {
            let mod = sqrt(this.vCenter.dot(this.vCenter))
            let n = abs(ae.y * this.vCenter.x - ae.x * this.vCenter.y)
            d = n / mod
            console.log("3")

        }
        if (d < this.r / 2 + object.r / 2) {
            this.color = 'red'

        } else {
            this.color = 'blue'
        }

    }

    render() {
        push()

        fill(this.color);
        strokeWeight(0);
        ellipse(this.x, this.y, this.r);
        ellipse(this.x1, this.y1, this.r);
        let vCenter = createVector(this.x1 - this.x, this.y1 - this.y);

        let vNorm = createVector(-vCenter.y, vCenter.x);
        vNorm.setMag(this.r / 2);
        quad(
            this.x + vNorm.x,
            this.y + vNorm.y,
            this.x1 + vNorm.x,
            this.y1 + vNorm.y,
            this.x1 - vNorm.x,
            this.y1 - vNorm.y,
            this.x - vNorm.x,
            this.y - vNorm.y
        );

        pop()
    }
}
