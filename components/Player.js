import Component from "../lib/Component";

const IMG_SRC = "resource/image/p1.png"
export default class Player extends Component{
    constructor(ctx){
        super();
        super.setRender(this.draw)

        this.x = 0
        this.y = 0
        this.image = new Image();
        this.image.src = IMG_SRC
        // this.image.width = 128
        // this.image.height = 192

        this._ani_is_playing = false;
        this._ani_idx = -1;

        this.ctx = ctx;
        this._ani_current_index = 0;

        let _this = this
        this.start();

        this.walk_left = true;
        this.walk_speed = 5;

        // wx.onTouchStart((e)=> {
        //     console.log(this.x)
        //     console.log(e.touches)
        //     let _x = e.touches[0].clientX
        //     console.log(_x)
        //     let _y = e.touches[0].clientY
        //     this.c();
        //     if(_x >= this.x){
        //         this.walk_left = true;
        //         this.__walk_left(ctx, this.image)
        //         console.log('right')
        //     }else{
        //         this.walk_left = false;
        //         console.log('left')
        //         this.__walk_right(ctx, this.image)
        //     }

        //     if(_y >= this.y){

        //     }else{

        //     }


        // })
    }

    start(){
        setInterval(()=>{
            this.c();
        }, 1000/10)
    }

    c(){
        this._ani_current_index++;

        if(this._ani_current_index > 3){
            this._ani_current_index = 0;
        }
        this.x += (this.walk_left ? 1: -1) * this.walk_speed
        // console.log(this._ani_current_index)
    }

    animate(){

        if(this.walk_left){
            !this._ani_is_playing && this.__walk_right(this.ctx, this.image)
        }else{
            !this._ani_is_playing && this.__walk_left(this.ctx, this.image)
        }

        if(this.x >= canvas.width - 50){
            this.walk_left = false
        }

        if(this.x <= 0){
            this.walk_left = true;
        }



        // console.log(this.x)

        // this.ctx.drawImage(this.image, 30, 60, 20,20, 50,50, 30,20)
    }

    __walk_left(ctx, img){
        let cut_width = img.width / 4;
        let cut_height = 48;

        ctx.drawImage(img, cut_width * this._ani_current_index, 47, cut_width, cut_height, this.x, this.y, cut_width * 2,cut_height *2)
    }

    __walk_right(ctx, img){

        let cut_width = img.width / 4;
        let cut_height = 48;

        ctx.drawImage(img, cut_width * this._ani_current_index, 94, cut_width, cut_height, this.x, this.y, cut_width * 2,cut_height *2)

    }

    draw(ctx) {

    }
}
