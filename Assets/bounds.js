

class Bounds {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.pivots = []
        this.populate()
    }

    populate() {
        for (let i = 0; i < 8; i++) {
            let j = floor(i / 4)
            let x = this.x * pow(-1, j+1)
            j = floor(i / 2)
            let y = this.y * pow(-1, j+1)
            let z = this.z * pow(-1, i+1)
            this.pivots.push(new Ball(x, y, z, i))
            console.log(j)
            console.log(pow(-1, j+1))
            console.log(this.pivots[i].pos)
        }
        

    }



    render() {
        for(let i = 0; i<this.pivots.length; i++){
            this.pivots[i].render();
        }
        quad(
            this.pivots[1].render().x,
            this.pivots[1].render().y,
            this.pivots[0].render().x,
            this.pivots[0].render().y,
            this.pivots[2].render().x,
            this.pivots[2].render().y,
            this.pivots[3].render().x,
            this.pivots[3].render().y
        )
        
        quad(
            this.pivots[4].render().x,
            this.pivots[4].render().y,
            this.pivots[5].render().x,
            this.pivots[5].render().y,
            this.pivots[7].render().x,
            this.pivots[7].render().y,
            this.pivots[6].render().x,
            this.pivots[6].render().y
        )
    }

    frontFace(){
        quad(
            this.pivots[0].render().x,
            this.pivots[0].render().y,
            this.pivots[2].render().x,
            this.pivots[2].render().y,
            this.pivots[6].render().x,
            this.pivots[6].render().y,
            this.pivots[4].render().x,
            this.pivots[4].render().y
        )

    }

    backFace(){
        quad(
            this.pivots[1].render().x,
            this.pivots[1].render().y,
            this.pivots[3].render().x,
            this.pivots[3].render().y,
            this.pivots[7].render().x,
            this.pivots[7].render().y,
            this.pivots[5].render().x,
            this.pivots[5].render().y
        )
    }

}