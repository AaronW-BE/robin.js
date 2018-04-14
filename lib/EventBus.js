export default class EventBus{

    constructor(){
    }

    static bind(name, callback){
        if (!window.events) {
            window.events = [];
        }

        window.events.push({
            name: name,
            fn: callback
        })
    }

    static emit(name, ...params){
        if(window.events) {
            window.events.forEach((e) => {
                if (e.name === name) {
                    e.fn(...params);
                }
            })
        }
    }
}