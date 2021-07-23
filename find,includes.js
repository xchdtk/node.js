"use strict";

// find
const arr = ["node.js", "올인원"];

const ret = arr.find((key) => key === "올인원"); // find 값을 찾고 해당 데이터를 return
const res = arr.includes("node.js"); // includes 값을 찾고 해당 데이터가 아닌 찾으면 true, 못찾으면 false return
console.log(res);
