'use strict'
// arrow function 안됨
function* logging () {
    console.log(yield, 0)
    console.log(yield, 1)
    console.log(yield, 2)
}

const gen = logging()
gen.next()
gen.next('zero')
gen.next('first')
gen.next('second')
// gen.next()
// yield
// return 

const obj = {
    *gen() {
        let cnt = 0
        yield ++cnt;
        yield ++cnt;
        yield ++cnt;
    }
}

const g = obj.gen()

console.log(g.next())
console.log(g.next())
console.log(g.next())