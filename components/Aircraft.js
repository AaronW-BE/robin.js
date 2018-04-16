import Component from '../lib/Component'

export default class Aircraft extends Component{
    constructor(x, y, width, height){
        super(x, y, width, height);
        super.setRender(this.draw)
    }


    update(){
        // console.log('component update')
    }

    draw(ctx){
        // console.log('aircraft drawing')
        ctx.beginPath();
        ctx.fillStyle = "#f0f"
        ctx.fillRect(this.x, this.y, this.width,this.height)
    }
}