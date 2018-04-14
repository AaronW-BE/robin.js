import Component from '../lib/Component'

export default class Aircraft extends Component{
    constructor(ctx){
        super();

        super.setRender(this.draw)
    }


    update(){
        // console.log('component update')
    }

    draw(ctx){
        // console.log('aircraft drawing')
        ctx.beginPath();
        ctx.fillStyle = "#f0f"
        ctx.fillRect(this.x, this.y, 50,50)
    }
}