"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mobiles = [{
  name: 'young',
  brand: 'Samsung',
  price: 8000,
  accessories: ['charger', 'Shield'],
  features: {
    ram: 900
  }
}, {
  name: 'Realme C2',
  brand: 'Realme',
  price: 6000,
  Accessories: ['charger', 'Shield', 'warranty']
}, {
  name: 'iphone11',
  brand: 'iphone',
  price: 60000,
  Accessories: ['charger', 'Shield', 'warranty', 'headphone']
}];
mobiles.forEach(function (value) {
  for (var property in value) {
    var mob = value[property];

    if (mob instanceof Array) {
      for (var i in mob) {
        console.log('acces: ' + mob[i]);
      }
    } else if (_typeof(mob) == 'object') {
      for (var key in mob) {
        console.log(key + ':' + mob[key]);
      }
    } else if (typeof mob == 'function') {
      mob();
    } else {
      console.log(mob);
    }
  }
});