import Scene from "./lib/Scene";

import Color from './lib/Utils';

// import Aircraft from './components/Aircraft'
// import Aircraft from './samples/aircraft/Aircraft';
import Player from './components/Player';

import './lib/weapp-adapter'


import Runtime from './lib/Runtime'
import Aircraft from "./samples/aircraft/Aircraft";

// let canvas = wx.createCanvas();
let context = canvas.getContext('2d');

let runtime = Runtime.init(context);

let scene = new Scene(context);

let p1 = new Player(context);
p1.x = 50;
p1.y = 50;
scene.addGameObject(p1)
runtime.addScene(scene);

let scene2 = new Scene(context);
scene2.addGameObject(new Aircraft(context));
runtime.addScene(scene2);

let id = 0;
setInterval(function () {
    if (id === 0) {
        runtime.changeScene(1);
        id = 1;
    } else {
        runtime.changeScene(0);
        id = 0;
    }

}, 3000);

// EventBus.bind('update', function (msg) {
//     // console.log("ok event, msg is %s", msg)
// });

