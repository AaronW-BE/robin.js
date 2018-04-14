import EventBus from './EventBus'

class Runtime{
    constructor(){
        this.ctx = null;

        this.scenes = [];
        this.currentScene = 0;

        this.frames = 0;

    }

    addScene(scene){
        this.scenes.push(scene)
    }

    changeScene(idx){
        this.currentScene = idx;
        // console.log('change scene to no: %s', idx)
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


    getCurrentScene(){
        if (this.currentScene === undefined){
            console.log('current scene is not settle')
            return;
        }
        if (!this.scenes[this.currentScene]) {
            console.warn('the specified scene is not exist')
            return;
        }
        // console.log("get current scene : %s", this.currentScene);
        return this.scenes[this.currentScene];
    }

    render(){
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        let currentScene = this.getCurrentScene();
        if (currentScene) {
            currentScene.render();
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
