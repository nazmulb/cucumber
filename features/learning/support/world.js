const {setWorldConstructor} = require('cucumber');

// Using world we can add helper methods, or logging.
class World {
    constructor({attach, parameters}) {
        this.attach = attach;
        this.parameters = parameters;
    }

    get environment() {
        return "MAC OS";
    }

    helloWorld(){
        console.log("Hello World!");
    }
}

setWorldConstructor(World);