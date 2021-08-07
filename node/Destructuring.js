'use strict'

const obj = {
    title: "node.js",
    value: "올인원 패키지"
}

const arr = [0,1,2]
const { title, value } = obj
const [, a, b] = arr
console.log(title, value)
console.log(a, b)

// // 옛날
// const title = obj.title
// const value = obj.value