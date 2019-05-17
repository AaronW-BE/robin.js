import Scene from "./lib/Scene";

import Color, {GlobalUUid} from './lib/Utils';

// import Aircraft from './components/Aircraft'
import Aircraft from './samples/aircraft/Aircraft';
import Player from './components/Player';

import './lib/weapp-adapter'

import Runtime from './lib/Runtime'
import TestScript from "./samples/TestScript";
// let canvas = wx.createCanvas();
let context = canvas.getContext('2d');

let runtime = Runtime.init(context);

let scene = new Scene(context);

let p1 = new Player(context);
p1.x = 50;
p1.y = 50;

p1.addScript(new TestScript);

let p2 = new Player(context);
p2.x = 150;
p2.y = 200;
p1.walk_speed = 10;
scene.addGameObject(p1);
// scene.addGameObject(p2);

runtime.addScene(scene);
runtime.changeScene(0);

// EventBus.bind('update', function (msg) {
//     console.log("ok event, msg is %s", msg)
// });

