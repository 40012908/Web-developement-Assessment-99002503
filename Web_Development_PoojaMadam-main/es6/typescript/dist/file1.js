"use strict";
exports.__esModule = true;
exports.Product = exports.greet111 = exports.greeting111 = void 0;
exports.greeting111 = 'hello world';
function greet111() {
    console.log('exported');
    ownMsg();
}
exports.greet111 = greet111;
function ownMsg() {
    console.log('not exported');
}
var Product = /** @class */ (function () {
    function Product(itemName, price) {
        var _this = this;
        this.itemName = itemName;
        this.price = price;
        this.getinfo = function () {
            console.log(_this.itemName + " is of price " + _this.price);
        };
    }
    return Product;
}());
exports.Product = Product;
