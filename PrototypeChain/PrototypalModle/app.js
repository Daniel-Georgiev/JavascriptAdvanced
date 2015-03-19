Object.prototype.extends = function (properties) {
    function f() { };
    var prop;
    f.prototype = Object.create(this);
    for (prop in properties) {
        f.prototype[prop] = properties[prop];
    };
    
    f.prototype._super = this;
    return new f();
}

var Shape = {
    init: function init(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;
        return this;
    },
    toString: function toString() {
        return 'X: ' + this._x + ' Y:' + this._y + ' Color: ' + this._color;
    }
}

var Circle = Shape.extends({
    init: function init(x, y, color, radius) {
        this._super.init.call(this, x, y, color);
        this._radius = radius;
        return this;
    },
    toString: function toString() {
        return this._super.toString.call(this) + ' Radius: ' + this._radius;
    }
   
});

var Rectangle = Shape.extends({
    init: function init(x, y, color, width, height) {
        this._super.init.call(this, x, y, color);
        this._width = width;
        this._height = height;
        return this;
    },
    toString: function toString() {
        return this._super.toString.call(this) + ' Width: ' + this._width + ' Height: ' + this._height;
    }
});

var Triangle = Shape.extends({
    init: function init(x, y, color, bX, bY, cX, cY) {
        this._super.init.call(this, x, y, color);
        this._bX = bX;
        this._bY = bY;
        this._cX = cX;
        this._cY = cY;
        return this;
    },
    toString: function toString() {
        return this._super.toString.call(this) + ' bX: ' + this._bX + ' bY: ' + this._bY +
                                                    ' cX: '+ this._cX + ' cY: ' + this._cY;
    }

});

var Line = Shape.extends({
    init: function init(x, y, color, bX, bY) {
        this._super.init.call(this, x, y, color);
        this._bX = bX;
        this._bY = bY;
        return this;
    },
    toString: function toString() {
        return this._super.toString.call(this) + ' bX: ' + this._bX + ' bY ' + this._bY;
    }
});

var Segment = Shape.extends({
    init: function init(x, y, color, bX, bY) {
        this._super.init.call(this, x, y, color);
        this._bX = bX;
        this._bY = bY;
        return this;
    },
    toString: function toString() {
        return this._super.toString.call(this) + ' bX: ' + this._bX + ' bY ' + this._bY;
    }
});

var circle = Object.create(Circle).init(5, 5, 'red', 5);
console.log(circle.toString());

var rectangle = Object.create(Rectangle).init(5, 5, 'red', 5, 5);
console.log(rectangle.toString());

var triangle = Object.create(Triangle).init(5, 5, 'red', 5, 5, 5, 5, 5);
console.log(triangle.toString());

var line = Object.create(Line).init(5, 5, 'red', 5, 5);
console.log(line.toString());

var segment = Object.create(Segment).init(5, 5, 'red', 5, 5);
console.log(segment.toString())