import Component from "../lib/Component";

const BG_IMG_SRC = './images/bg.jpg';
const BG_WIDTH = 512;
const BG_HEIGHT = 512;

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

export default class Background extends Component {
    constructor(){
        super();
        super.setRender(this.draw);

        this.image = new Image();
        this.image.src = BG_IMG_SRC;

        this.width = BG_WIDTH;

        this.height = BG_HEIGHT;

        // this.image.width = 100;
        // this.image.height = 100;

        this.top = 0;
    };

    update(){
        this.top += 2;

        if (this.top > screenHeight) {
            this.top = 0;
        }

    }

    draw(ctx){
        ctx.drawImage(
            this.image,
            0,
            0,
            this.width,
            this.height,
            0,
            -screenHeight + this.top,
            screenWidth,
            screenHeight
        );
        //
        //
        ctx.drawImage(
            this.image,
            0,
            0,
            this.width,
            this.height,
            0,
            this.top,
            screenWidth,
            screenHeight
        )

    }
}