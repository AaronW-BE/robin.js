import sha1 from "./Utils/Sha1";

export default class Color {
    constructor(){
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.alpha = 1;
    }

    getRGB(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    getRGBA(){
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`;
    }

    setColor(red, green, blue, alpha){
        red && (this.r = red);
        green && (this.g = green);
        blue && (this.b = blue);
        alpha && (this.alpha = alpha);
    }

    generateRandomColor(){
        let _r = parseInt(Math.random() * 255);
        let _g = parseInt(Math.random() * 255);
        let _b = parseInt(Math.random() * 255);
        let _a = Math.floor(Math.random() * 100) / 100;

        this.r = _r;
        this.g = _g;
        this.b = _b;
        this.alpha = _a;
        return this.getRGBA();
    }
}

export class GlobalUUid {
    static uuid() {
        let ids = [];
        return {
            get:  () => {
                let exists = false;
                let id;
                do {
                    id = this.generateId();
                    exists = ids.indexOf(id) !== -1;
                } while (exists);
                ids.push(id);
                return sha1(id);
            }
        }
    }

    static get() {
        return this.uuid().get();
    }

    static generateId() {
        return new Date().getTime();
    }
}
