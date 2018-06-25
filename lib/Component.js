// Direction = {
//     TOP: {
//         x: 0, y: -1
//     },
//     DOWN: {
//         x: 0, y: 1
//     },
//     LEFT: {
//         x: -1, y: 0
//     },
//     RIGHT: {
//         x: 1, y: 0
//     }
// };


export default class Component{

    constructor(x = 0, y = 0, width = 0, height = 0){

        this.init();

        this.x = 0;
        this.y = 0;
        this._render = null;

        this.collisionTarget = null;
        this.onCollision = null;

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    update(){

    }


    init(){
        this.x = 0;
        this.y = 0;
        this.visible = false;
        this.alive = true;
    }

    setCollisionDetail(target){
        this.collisionTarget = target;
    }

    setAlive(alive){
        this.alive = alive;
    }

    getAlive(){
        return this.alive;
    }

    setRender(renderFunc){
        this._render = renderFunc;
    }

    render(ctx){
        // console.log('game object is rendering');
        if (!this.alive) {
            return
        }

        typeof this.animate === 'function' && this.animate.call(this)

        if (this.onCollision && typeof this.onCollision === 'function' && this.collisionTarget != null){
            // console.log('collision render');
            this.onCollision.call(this, this.collisionTarget);
            this.collisionTarget = null;
        }
        this._render && this._render(ctx);
    }

}