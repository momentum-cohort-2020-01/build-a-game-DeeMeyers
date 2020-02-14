
    const canvas = document.querySelector('#canvas')
    const screen =  canvas.getContext('2d')

class Game {
    constructor() {
        
        let gameSize = { x: canvas.width, y: canvas.height }
        this.bodies = []
        this.bodies = this.bodies.concat(new Player(this, gameSize))
        this.bodies = this.bodies.concat(new Enemy(this, gameSize))


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
            console.log(this.bodies[i])
            if (this.bodies[i] instanceof Player){

                drawRect(screen, this.bodies[i])
            }
            else if(this.bodies[i] instanceof Enemy){
                drawEnemy(screen, this.bodies[i])
            }
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
        this.size = {x: 25, y: 25}
        this.center = {x: 0, y: randomY()}
    }

    update(){
        if(this.center.x <= 500){
            this.center.x += 7
        }
        else{
            this.center.x = 0
        }
        if(this.center.y <= 500){
            this.center.y += 4*posNeg()
        }
        else{
            this.center.y = 0
        }
    }

}

function drawRect (screen, body) {
    screen.fillStyle  = 'red';
    screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2,
        body.size.x, body.size.y)
    
}
//making an enemy: have an enemy move from the left to the right 
//in a random, straight path. it'll spawn random on the y axis then move
//linearly across the screen
//start at random y, add same value to x and y cordinate, check to see if 
//it has moved off screen, delete it once it reaches off screen

//return interger between 1 and 499, spawn posistion along the y axis
function randomY(){
    return Math.floor(Math.random()*Math.floor(500))+1
}


//will be 1 or -1, make enemy go up or down from posistion
function posNeg(){
    let temp = Math.random()
    if(temp > .5){
        return 1
    }
    else{
        return -1
    }
}
//makes the shape of the enemy at (0, randomY)
function drawEnemy(screen, body){
    screen.fillStyle = 'green';
    screen.fillRect(body.center.x, body.center.y,
        body.size.x, body.size.y)
}

new Game()