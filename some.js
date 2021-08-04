"use strict";

const arr = [0, 1, 2];

const res = arr.some((key) => {
  return key < 0;
});
console.log(res);
