import keyListener from "../../basic/KeyListener.js";
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

export default settings