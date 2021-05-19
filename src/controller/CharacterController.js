import eventBus from "../basic/EventBus.js"
import keyListener from "../basic/KeyListener.js";
import FiniteStateMachine from "./FiniteStateMachineHacked.js";
import directionWSController from "./DirectionWSController.js";
import machine from "../basic/Machine.js";
import animatorController, { createAnimator } from './statemachines/AnimatorController.js'

let settings = {
    'normal': {
        transition: (input) => {
            let state = 'normal'
            if (input[0] == 16 && input[1] == true) {
                return 'runner'
            }
            if (input[0] == 32 && input[1] == true) {
                return 'ninja'
            }
            return state
        }
    },
    'runner': {
        transition: (input) => {
            let state = 'runner'
            if (input[0] == 16 && input[1] == false && !keyListener.isPressed(16)) {
                return 'normal'
            }
            if (input[0] == 16 && input[1] == false && keyListener.isPressed(32)) {
                return 'ninja'
            }
            if (input[0] == 32 && input[1] == true) {
                return 'ninja'
            }
            return state
        }
    },
    'ninja': {
        transition: (input) => {
            let state = 'ninja'
            if (input[0] == 32 && input[1] == false && !keyListener.isPressed(16)) {
                return 'normal'
            }
            if (input[0] == 32 && input[1] == false && keyListener.isPressed(16)) {
                return 'runner'
            }
            if (input[0] == 16 && input[1] == true) {
                return 'runner'
            }
            return state
        }
    },
}

let modeController = new FiniteStateMachine('normal', settings)
let mode = 'normal'
let direction = 'idle'
eventBus.suscribe('keyListener', (arr) => {
    mode = modeController.run(arr)
    direction = directionWSController.run(arr)
})

let characterController = (mesh) => {
    createAnimator(mesh)
    machine.addCallback(() => {
        animatorController[mode].run(direction, mode)
    })
}
export default characterController