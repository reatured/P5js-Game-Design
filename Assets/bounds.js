

class Bounds {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.pivots = []
        this.netHight = 80
        this.netDrew = false
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
    }



    render() {
        // for(let i = 0; i<this.pivots.length; i++){
        //     this.pivots[i].render();
        // }

        // quad(
        //     this.pivots[1].x,
        //     this.pivots[0],
        //     this.pivots[2],
        //     this.pivots[3],
        // )
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

        // quad(
        //     this.pivots[8].x,
        //     this.pivots[8].y,
        //     this.pivots[9].x,
        //     this.pivots[9].y,
        //     this.pivots[10].x,
        //     this.pivots[10].y,
        //     this.pivots[11].x,
        //     this.pivots[11].y
        // )
        if(this.netDrew == false){
            this.net()
        }else{
            this.netDrew = false
        }
 

        
        // line(
        //     this.pivots[1].x,

        // )

        // quad(
        //     this.pivots[4].render().x,
        //     this.pivots[4].render().y,
        //     this.pivots[5].render().x,
        //     this.pivots[5].render().y,
        //     this.pivots[7].render().x,
        //     this.pivots[7].render().y,
        //     this.pivots[6].render().x,
        //     this.pivots[6].render().y
        // )
    }

    net() {
        push()
        fill(200, 200, 255,255)
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

    frontFace() {
        quad(
            this.pivots[0].x,
            this.pivots[0].y,
            this.pivots[2].x,
            this.pivots[2].y,
            this.pivots[6].x,
            this.pivots[6].y,
            this.pivots[4].x,
            this.pivots[4].y
        )

    }

    backFace() {
        quad(
            this.pivots[1].x,
            this.pivots[1].y,
            this.pivots[3].x,
            this.pivots[3].y,
            this.pivots[7].x,
            this.pivots[7].y,
            this.pivots[5].x,
            this.pivots[5].y
        )
    }

}