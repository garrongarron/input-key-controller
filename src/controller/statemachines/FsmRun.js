class FsmRun {
    constructor() {

    }
    run(arr) {
        if (arr[0] == 87 && arr[1] == true) {
            this.action = fmsRun
        }
        if (arr[0] == 83 && arr[1] == true) {
            this.action = fmsWalk
        }
        this.action
    }
}
let fmsRun = new FsmRun()
export default fmsRun