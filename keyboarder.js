class Keyboarder {
  constructor () {
    // Records up/down state of each key that has ever been pressed.
    let keyState = {}
    console.log(this.keyState)

    window.addEventListener('keydown', function (event) {
        keyState[event.key] = true
      })
    // When key goes up, record that it is up.
    window.addEventListener('keyup', function (event) {
      keyState[event.key] = false
    })

this.isDown = function(keyCode){
  console.log(keyState)
  return keyState[keyCode] === true
  }
  }
}