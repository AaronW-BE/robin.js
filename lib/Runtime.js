import EventBus from './EventBus'

class Runtime{
    constructor(){
        this.ctx = null;

        this.scenes = [];
        this.sceneRef = 0;

        this.frames = 0;
    }

    addScene(scene){
        this.scenes.push(scene)
    }

    changeScene(idx){
        this.sceneRef = idx;
        console.log('change scene to no: %s', idx)
        // console.log("current scene: %s", this.currentScene);
    }

    init(ctx){
        this.ctx = ctx;
        this.bindLoop = this.loop.bind(this)

        this.bindLoop();
        return this;
    }


    loop(){
        this.frames++;
        this.update();
        this.render();
        requestAnimationFrame(this.bindLoop)

        // this.printFrames();
    }

    get currentScene() {
        return this.scenes[this.sceneRef];
    }


    render(){
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "#fff"
        this.ctx.fillRect(0,0 , canvas.width, canvas.height)
        if (this.currentScene) {
            this.currentScene.render();
        }
        // console.log('runtime is rendering')
    }


    update(){

    }

    getFrames(){
        return this.frames;
    }

    printFrames(){
        console.log("current frames %s", this.frames)
    }

}

const runtime = new Runtime();

export default {
    init: runtime.init.bind(runtime)
}
