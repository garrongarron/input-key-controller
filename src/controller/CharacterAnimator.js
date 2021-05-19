import Animator from "../models/Animator.js";

class MockAnimator {
    action(a, b, c, mode) {
        console.log(a,
            // b, c,
            mode);
    }
}
let characterAnimator = new MockAnimator()

export default characterAnimator