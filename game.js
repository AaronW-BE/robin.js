import Scene from "./lib/Scene";
import Aircraft from './components/Aircraft'

import Runtime from './lib/Runtime'
import Background from "./components/Background";

import './lib/weapp-adapter';

const Direction = {
    TOP: {
        x: 0, y: -1
    },
    DOWN: {
        x: 0, y: 1
    },
    LEFT: {
        x: -1, y: 0
    },
    RIGHT: {
        x: 1, y: 0
    }
};
if (!canvas) {
    let canvas = wx.createCanvas();
}
let context = canvas.getContext('2d');

let runtime = Runtime.init(context);

let scene = new Scene(context);


let aircraft1 = new Aircraft(0, 0, 50, 50);

aircraft1.onCollision = function (target) {
    console.log("got a collision, target is %s", target);
};

let background = new Background();

scene.addGameObject(background);
scene.addGameObject(aircraft1);

let moveSpeed = 1;

aircraft1.x = (canvas.width - aircraft1.width) / 2;
aircraft1.y = canvas.height - 3 * aircraft1.height;

scene.onUpdate = function () {
    // this.gameObject[1].x += moveSpeed;
    this.gameObject[1].y -= moveSpeed;

};

runtime.addScene(scene);

