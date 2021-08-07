// Object.assign -> 여러개의 객체를 하나로 합침

"use strict";

const obj = {
  title: "node.js 올인원 패키지",
};

const newObj = {
  name: "패스트캠퍼스",
};

const ret1 = Object.assign({}, obj, newObj);
console.log(ret1);

// spread -> 배열, 객체 등 활용가능
const ret2 = {
  ...obj,
  ...newObj,
};
console.log(ret2);

const arr = [1, 2, 3];
const newArr = [4, 5, 6];

const ret3 = [...arr, ...newArr];
const ret4 = arr.concat(newArr);
console.log(ret3);
console.log(ret4);
console.log(Object.assign([], ret3, ret4));
