class Robot {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name}`)
    }
}

class Ai extends Robot {
    constructor(name) {
        super(name)
    }

    walk() {
        console.log(`walk : ${this.name}`)
    }
}

const r = new Robot('hi')
r.speak()

const a = new Ai('hi')
a.speak()
a.walk()
console.log(a)