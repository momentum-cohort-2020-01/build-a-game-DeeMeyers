

class Game {
    constructor() {
        const canvas = document.querySelector('#canvas')
        const screen =  canvas.getContext('2d')
        
        let gameSize = { x: canvas.width, y: canvas.height }
        this.bodies = []
        this.bodies = this.bodies.concat(new Player(this, gameSize))


        let tick = () => {
            
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
}
class Player {
    constructor (game, gameSize) {
        this.game = game
        this.size = { x: 15, y: 15 }
        this.center = { x: gameSize.x/2, y: gameSize.y/2 }

    
    }
}

function drawRect (screen, body) {
    screen.fillRect(10, 10, 25, 25)
    context.fillStyle = black
}

new Game()