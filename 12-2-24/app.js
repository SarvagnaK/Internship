"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = 10;
var message = "Hello Angular";
var isDone = true;
// Function with type annotation
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
var user = {
    name: "Sarvagna",
    age: 22,
    greet: function () { return "Hello, my name is ".concat(user.name); }
};
console.log(user.greet());
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Car.prototype.getDetails = function () {
        return "Car: ".concat(this.brand, " ").concat(this.model);
    };
    return Car;
}());
var myCar = new Car("Mercedez", "Benz");
console.log(myCar.getDetails());
var Geometry;
(function (Geometry) {
    function areaOfCircle(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.areaOfCircle = areaOfCircle;
})(Geometry || (Geometry = {}));
console.log(Geometry.areaOfCircle(5)); // Output: 78.54
var math_1 = require("./math");
console.log((0, math_1.ad)(5, 10));
