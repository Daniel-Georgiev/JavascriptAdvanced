function add(n) {
    var v = function (x) {
        return add(n + x);
    };

    v.valueOf = v.toString = function () {
        return n;
    };

    return v;
}

var addTwo = +add(2);
console.log(addTwo); //2

var addTwo = add(2);
console.log(+addTwo(3)(5)(1)(7)); //18



console.log(+addTwo(1));
console.log(+addTwo(2)(3));
console.log(+addTwo(1)(1)(1))
console.log(+addTwo(1)(0)(-1)(-1));

//var addTwo = add(2);
//console.log(addTwo);
//var addTwo = add(2);
//console.log(addTwo(3));
//var addTwo = add(2);
//console.log(addTwo(3)(5));
