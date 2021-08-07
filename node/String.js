"use strict";

let string = "node.js 올인원 패키지";

let isStartWith = string.startsWith("n");
console.log(isStartWith);
let isIncludes = string.includes(",");
console.log(isIncludes);
let isEndWith = string.endsWith("지");
console.log(isEndWith);

const checkIfContains = () => {
  if ((isStartWith || isEndWith) && isEndWith) {
    return true;
  }
};

console.log(checkIfContains());
