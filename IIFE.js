// IIFE(즉시 실행 함수) -> 정의되자마자 실행되는 함수
// 외부에서 IIFE내의 접근 불가능
// 실행결과만 저장
let r = (function () {
  var lang = "js";
  return lang;
})();
console.log(r);

// 일반 함수
let a = function () {
  let lang = "jin";
  return lang;
};

console.log(a());
