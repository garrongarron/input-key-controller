import { FBXLoader } from 'https://threejs.org/examples/jsm/loaders/FBXLoader.js'
import fileList from './SwordAndShield/FileList.js'

class Loader {
    constructor(name, urlList) {
        let loader = new FBXLoader();
        let promises = []
        let animations = []
        let animFrecuentlyUsed = [26, 35, 36, 49, 48, 50,
            51, 17, 41, 10, 52, 26
        ]

        let p1 = new Promise((res, rej) => {
            loader.load('src/models/SwordAndShield/' +
                fileList[0],
                function(object) {
                    res(object)
                })
        })

        for (let index = 1; index < fileList.length; index++) {
            if (!animFrecuentlyUsed.includes(index)) continue
            promises[index] = new Promise((resolve, reject) => {
                loader.load('src/models/SwordAndShield/' +
                    fileList[index],
                    function(object) {
                        animations[index] = object.animations[0]
                        resolve(index)
                    })
            })
        }

        let p2 = Promise.all(promises)

        this.model = new Promise((res, rej) => {
            Promise.all([p1, p2]).then(data => {
                let object = data[0]
                object.animations = animations;
                object.position.set(0, 0, 0)
                object.rotation.y = Math.PI
                let s = 0.02
                object.scale.set(s, s, s)
                res(object)
            })
        })
    }

    getObject() {
        return this.model
    }
}

export default Loader