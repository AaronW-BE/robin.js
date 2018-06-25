import Component from "../../lib/Component";

export default class Aircraft extends Component {
    constructor(ctx) {
        super();

        super.setRender(this.draw)
        this.width = 128;
        this.height = 128;

        const img_path = "samples/aircraft/resource/aircraft.jpg";

        this.img = new Image();
        this.img.width = this.width
        this.img.height = this.height
        this.img.src = img_path;
        console.log(this.img);
    }

    update() {
        // console.log('component update')
    }

    draw(ctx) {
        // console.log('aircraft drawing')
        // ctx.beginPath();
        // ctx.fillStyle = "#f0f"

        ctx.drawImage(this.img,this.x,this.y);
        // ctx.fillRect(this.x, this.y, 50,50)
    }

}