class Page {
    open() {
        console.log("Open page");
    }
}

class HomePage extends Page {
    // constructor() {
    //     super();
    // }
    search() {
        this.open();
        console.log("Searching.....");
    }
}

new HomePage().search();

class Animal {
    move() {
        console.log("Moving...");
    }
}

class Bird extends Animal {
    fly() {
        console.log("Flying...");
    }
}

const hawk = new Bird();
hawk.move();
hawk.fly();