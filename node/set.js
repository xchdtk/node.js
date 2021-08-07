"use strict";

const test = new Set();

test.add(1);
test.add(1);
test.add(2);
test.add(2);
test.add(3);
test.add(3);

for (const item1 of test) {
  console.log(item1);
}

// .has -> 해당 값 존재 유무 반환(true/false)
const ret = test.has(2);
console.log(ret);
