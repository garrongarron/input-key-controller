import Animator from "../../models/Animator.js";
import ModeController from "./ModeController.js";
import ninjaActions from "./NinjaActions.js";
import normalActions from "./NormalActions.js";
import runnerActions from "./RunnerActions.js";

class Modes {
    constructor(mesh) {
        this.animator = new Animator(mesh)
        this.modes = {
            normal: new ModeController(this.animator, normalActions),
            ninja: new ModeController(this.animator, ninjaActions),
            runner: new ModeController(this.animator, runnerActions),
        }
    }
    getModes() {
        return this.modes
    }
    start() {
        this.animator.start()
    }
    stop() {
        this.animator.stop()
    }
}

export default Modes