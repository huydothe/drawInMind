var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        var _this = this;
        this.draw = function () { return "draw circle"; };
        this.checkTodraw = function () {
            if (_this.radius && _this.radius) {
                return _this.draw();
            }
            else {
                return "Enter input";
            }
        };
        this.radius = radius;
        this.color = color;
    }
    return Circle;
}());
var circle = new Circle('red', 40);
console.log(circle.checkTodraw());
