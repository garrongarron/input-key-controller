class FiniteStateMachineHacked {
    constructor(defaultState, settings) {
        this.state = defaultState || 'default'
        this.settings = settings || {
            'default': {
                transition: (input) => {
                    let nextState = 'default'
                        // nextState = doSomeThingElse(input)
                    return nextState
                }
            }
        }
    }

    run(input) {
        return this.transition(this.state, input)
    }

    transition(state, input) {
        let out = this.settings[state].transition(input)
            // console.log(out);
        this.state = out
        return out
    }
}
export default FiniteStateMachineHacked