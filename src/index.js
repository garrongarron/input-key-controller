import SceneHandler from './scenes/SceneHandler.js';
import sceneList from './scenes/SceneList.js';

let scenehandler = new SceneHandler(sceneList)

// console.log(sceneList.scene1);
scenehandler.goTo(sceneList.scene1)