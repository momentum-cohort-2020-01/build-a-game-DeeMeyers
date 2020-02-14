
    const canvas = document.querySelector('#canvas')
    const screen =  canvas.getContext('2d')

class Game {
    constructor() {
        
        let gameSize = { x: canvas.width, y: canvas.height }
        this.bodies = []
        this.bodies = this.bodies.concat(new Player(this, gameSize))


        let tick = () => {
            this.update()
            this.draw(screen, gameSize)
            requestAnimationFrame(tick)
        }
        tick()
    }

    draw (screen, gameSize) {
        // Clear away the drawing from the previous tick.
        screen.clearRect(0, 0, gameSize.x, gameSize.y)
        
        // Draw each body as a rectangle.
        for (let i = 0; i < this.bodies.length; i++) {
        drawRect(screen, this.bodies[i])
        } 
    }
    update () {
        
        for (let i = 0; i < this.bodies.length; i++) {
            this.bodies[i].update()
        }
        }
}
class Player {
    constructor (game, gameSize) {
        this.game = game
        this.size = { x: 15, y: 15 }
        this.center = { x: 250, y: 250 }  
        
        this.keyboarder = new Keyboarder()
    }

    update () {
        console.log("update ran")
        if(this.keyboarder.isDown('ArrowLeft') && (this.center.x >= 0)){
            this.center.x -= 2
        }
        else if(this.keyboarder.isDown('ArrowRight') && (this.center.x <=500)){
            this.center.x += 2
        }
        else if(this.keyboarder.isDown('ArrowUp') && (this.center.y >= 0)){
            this.center.y -= 2
        }
        else if(this.keyboarder.isDown('ArrowDown') && (this.center.y <= 500)){
            this.center.y += 2
        }

    }
}

class Enemy {
    constructor(game, gameSize){
        this.game = game
        this.gameSize = gameSize
    }
}

function drawRect (screen, body) {
    screen.fillStyle  = 'red';
    screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2,
        body.size.x, body.size.y)
    
}

new Game()