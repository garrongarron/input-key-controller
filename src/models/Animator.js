import machine from '../basic/Machine.js'
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.127/build/three.module.js';

let interpolationTime = .2

class Animator {
    constructor(mesh) {

        this.mixer = new THREE.AnimationMixer(mesh)
        this.clock = new THREE.Clock()
        this.inProgress = false
        this.onLoopFinished = function() {
            this.inProgress = false
        }
        machine.addCallback(() => {
                this.mixer.update(this.clock.getDelta());
            })
            // console.log(mesh);
        this.clips = mesh.animations.map(animation => {
            return this.mixer.clipAction(animation)
        })

        this.lastClip = null
    }
    action(m, timeScale, loop) {
        //wait for loop
        // console.log('23');
        if (this.inProgress) return
        if (loop) {
            this.mixer.addEventListener('loop', this.onLoopFinished.bind(this));
            this.inProgress = true
        }
        //speed uot
        // console.log('30');
        this.mixer.timeScale = timeScale
            //first time
        if (this.lastClip === null) {
            // console.log('34', m, this.clips);
            this.clips[m].play();
            this.lastClip = m
            return
        }
        //repetition
        if (this.lastClip == m) return
            //crossFade
            // console.log(this.clips[m]);
        this.clips[m].reset();
        this.clips[m].play();
        this.clips[this.lastClip].crossFadeTo(this.clips[m], interpolationTime, true);
        this.lastClip = m
    }
}

export default Animator