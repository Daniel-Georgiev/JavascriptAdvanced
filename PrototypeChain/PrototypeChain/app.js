Object.prototype.extends = function (parent) {
    if (!Object.create) {
        Object.create = function (proto) {
            function F() {};
            F.prototype = proto;
            return new F;
        };
    };
    
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

var Shapes = (function () {
    var Shape = (function () {
        function Shape(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;
        }
        Shape.prototype.toString = function () {
            return 'X: ' + this._x + ' Y: ' + this._y + ' Color: ' + this._color;
        }
        return Shape;
    }());
    
    var Circle = (function () {
        function Circle(x, y, color, radius) {
            Shape.call(this, x, y, color);
            this._radius = radius;
        }
        
        Circle.extends(Shape);
        Circle.prototype.toString = function () {
            return Shape.prototype.toString.call(this) + ' Radius: ' + this._radius;
        }
        return Circle;


    }());
    
    var Rectangle = (function () {
        function Rectangle(x, y, color, width, height) {
            Shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }
        
        Rectangle.extends(Shape);
        
        Rectangle.prototype.toString = function () {
            return Shape.prototype.toString.call(this) + ' Height: ' + this._height + ' Width: ' + this._width;
        }
        return Rectangle;
        
    }());
    
    var Triangle = (function () {
        function Triangle(x, y, color, bX, bY, cX, cY) {
            Shape.call(this, x, y, color);
            this._bX = bX;
            this._bY = bY;
            this._cX = cX;
            this._cY = cY;
        }
        
        Triangle.extends(Shape);
        Triangle.prototype.toString = function () {
            return Shape.prototype.toString.call(this) + ' bX: ' + this._bX + ' bY: ' + this._bY + ' cX: ' + this._cX +
        ' cY: ' + this._cY;
        }
        return Triangle;
        
    }());
    
    var Line = (function () {
        function Line(x, y, color, bX, bY) {
            Shape.call(this, x, y, color);
            this._bX = bX;
            this._bY = bY;
        }
        
        Line.extends(Shape);
        Line.prototype.toString = function () {
            return Shape.prototype.toString.call(this) + ' bX: ' + this._bX + ' bY: ' + this._bY;
        }
        return Line;
        
    }());
    
    var Segment = (function () {
        function Segment(x, y, color, bX, bY) {
            Shape.call(this, x, y, color);
            this._bX = bX;
            this._bY = bY;
        }
        
        Segment.extends(Shape);
        Segment.prototype.toString = function () {
            return Shape.prototype.toString.call(this) + ' bX: ' + this._bX + ' bY: ' + this._bY;
        }
        return Segment;
        
    }());
    return {
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Segment: Segment,
        Line: Line

    }
}());

var circle = new Shapes.Circle(5, 5, 'red', 5);
console.log(circle.toString());

var rectangle = new Shapes.Rectangle(5, 5, 'red', 5, 5);
console.log(rectangle.toString());

var triangle = new Shapes.Triangle(5, 5, 'red', 5, 5, 5, 5, 5);
console.log(triangle.toString());

var line = new Shapes.Line(5, 5, 'red', 5, 5);
console.log(line.toString());

var segment = new Shapes.Segment(5, 5, 'red', 5, 5);
console.log(segment.toString())
