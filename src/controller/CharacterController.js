import eventBus from "../basic/EventBus.js"
import FiniteStateMachine from "./FiniteStateMachineHacked.js";
import directionWSController from "./DirectionWSController.js";
import machine from "../basic/Machine.js";
import Modes from './statemachines/Modes.js'
import settings from './statemachines/ModeSettings.js'

class CharacterController {
    constructor(settings) {
        this.modes = null
        this.modeController = new FiniteStateMachine('normal', settings)
        this.direction = 'idle'
        this.mode = 'normal'
        this.flag = false
        this.list = null
        this.callback = () => {
            this.list[this.mode].run(this.direction, this.mode)
        }

        eventBus.suscribe('keyListener', (arr) => {
            if (!this.flag) return
            this.mode = this.modeController.run(arr)
            this.direction = directionWSController.run(arr)
        })
    }

    setMesh(mesh) {
        if (this.modes == null) {
            this.modes = new Modes(mesh)
            this.list = this.modes.getModes()
        }
    }

    start() {
        this.flag = true
        this.modes.start()
        machine.addCallback(this.callback)
    }

    stop() {
        this.flag = false
        this.modes.stop()
        machine.removeCallback(this.callback)
    }
}

let characterController = new CharacterController(settings)

export default characterController