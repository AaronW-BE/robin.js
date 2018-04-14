import Scene from "./lib/Scene";
import Aircraft from './components/Aircraft'

import Runtime from './lib/Runtime'

let canvas = wx.createCanvas();
let context = canvas.getContext('2d');

let runtime = Runtime.init(context);
// let runtime = new Runtime();
// runtime.init(context);

let scene = new Scene(context);

let scene2 = new Scene(context);

let aircraft1 = new Aircraft();

aircraft1.onCollision = function (target) {
    console.log("got a collision, target is %s", target);
};

let aircraft2 = new Aircraft();
aircraft2.onCollision = function (target) {
    console.log("got a collision, target is %s", target);

};

let moveSpeed = 1;

scene.addGameObject(aircraft1);
scene2.addGameObject(aircraft2);
scene.onUpdate = function () {
    this.gameObject[0].x += moveSpeed;
    this.gameObject[0].y += moveSpeed;

    if (this.gameObject[0].x >= canvas.width || this.gameObject[0].y >= canvas.height) {
        console.log('will change scene');
        this.gameObject[0].x = this.gameObject[0].y = 0
        runtime.changeScene(1);
        // moveSpeed++;
    }
};

scene2.onUpdate = function () {
    this.gameObject[0].x += moveSpeed;
    this.gameObject[0].y += moveSpeed;
    if (this.gameObject[0].x >= canvas.width || this.gameObject[0].y >= canvas.height) {
        console.log('will change scene');
        this.gameObject[0].x = this.gameObject[0].y = 0

        runtime.changeScene(0);
        // moveSpeed++;
    }
};
runtime.addScene(scene);
runtime.addScene(scene2);





// EventBus.bind('update', function (msg) {
//     // console.log("ok event, msg is %s", msg)
// });

