
export default class Scene{
    constructor(ctx){
        this.ctx = ctx;
        this.gameObject = [];

        this.onUpdate = null;

        this.sceneID = null;
    }

    reset(){
    }

    collisionDetect(){
        this.gameObject.forEach((object, idx) => {
            this.gameObject.forEach((_object, _idx) => {
                let collisionFlag = false;
                if (idx === _idx) {
                    return;
                }
                if(_object.x === object.x && _object.y === object.y) {
                    collisionFlag = true;
                }


                if (collisionFlag) {
                    object.setCollisionDetail(_object);
                    return true;
                }
                return false;
            });
        })
    }

    addGameObject(component){
        this.gameObject.push(component)
    }

    render(){
        // console.log('scene is rendering');
        this.gameObject.forEach((object) => {
            object.update(this.ctx);
            this.collisionDetect();
            object.render(this.ctx);
        });


        if (this.onUpdate && typeof this.onUpdate === 'function'){
            this.onUpdate.call(this);
        }
    }

}