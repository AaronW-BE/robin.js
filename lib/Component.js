

export default class Component{
    constructor(ctx){
        this.ctx = ctx;
        // if(this instanceof Component) {
        //     this.update();
        // }
        this.init();

        this.x = 0;
        this.y = 0;
        this._render = null;

        this.collisionTarget = null;
        this.onCollision = null;
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