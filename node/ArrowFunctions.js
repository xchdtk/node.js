"use strict";

const add1 = function add(var1, var2) {
  return var1 + var2;
};

const add2 = (var1, var2) => {
  return var1 + var2;
};

console.log(add2(1, 2));

// 일반함수
API.prototype.get = function (resource) {
  var self = this;
  return new Promise(function (resolve, reject) {
    http.get(self.uri + resource, function (data) {
      resolve(data);
    });
  });
};

// arrowfunction
API.prototype.get = (resource) => {
  return new Promise((resolve, reject) => {
    http.get(this.uri + resource, (data) => {
      resolve(data);
    });
  });
};
