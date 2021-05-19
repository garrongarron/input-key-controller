import Animator from "../../models/Animator.js";

let animator = null

let createAnimator = (mesh) => {
    animator = new Animator(mesh)
}

let normalActions = {
    'idle': {
        id: 26,
        timeScale: 1,
        loop: false
    },
    'up': {
        id: 49,
        timeScale: 1,
        loop: false
    },
    'down': {
        id: 48,
        timeScale: 1,
        loop: false
    }
}
let normal = {
    run: function(state, mode) {
        const { id, timeScale, loop } = normalActions[state]
        console.log(id, timeScale, loop);
        animator.action(id, timeScale, loop)
    }
}


let minjaActions = {
    'idle': {
        id: 17,
        timeScale: 1,
        loop: false
    },
    'up': {
        id: 50,
        timeScale: 1,
        loop: false
    },
    'down': {
        id: 51,
        timeScale: 1,
        loop: false
    }
}
let ninja = {
    run: function(state, mode) {
        const { id, timeScale, loop } = minjaActions[state]
        animator.action(id, timeScale, loop)
    }
}


let runnerActions = {
    'idle': {
        id: 26,
        timeScale: 1,
        loop: false
    },
    'up': {
        id: 36,
        timeScale: 1,
        loop: false
    },
    'down': {
        id: 35,
        timeScale: 1,
        loop: false
    }
}
let runner = {
    run: function(state, mode) {
        const { id, timeScale, loop } = runnerActions[state]
        animator.action(id, timeScale, loop)
    }
}

export default {
    normal,
    runner,
    ninja
}

export { createAnimator }