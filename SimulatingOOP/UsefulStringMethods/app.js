String.prototype.startsWith = function (substring) {

    if (this.substr(0, substring.length) === substring) {
        return true;
    }
    return false;
}

String.prototype.endsWith = function(substring){
    if (this.substring((this.length - substring.length), this.length) === substring) {
        return true;
    }
    return false;
}

String.prototype.left = function(count) {
    if (this.length < count) {
        return this.substring(0, this.length);
    }
    return this.substring(0, count);
}

String.prototype.right = function(count) {
    if (this.length < count) {
        return this.substring(0, this.length);
    }
    return this.substring((this.length - count), this.length);
}

String.prototype.padLeft = function (count, character) {
    var padcheck = (count + 1 - this.length);
    if (typeof (character) === "undefined") character = " ";
    if (padcheck > 0) {
        var padding = Array(padcheck).join(character);
    } else {
        return String(this);
    }
    
    return String(padding + this);
    
}

String.prototype.padRight = function(count, character) {
    var padcheck = (count + 1 - this.length);
    if (typeof (character) === "undefined") character = " ";
    if (padcheck > 0) {
        var padding = Array(padcheck).join(character);
    } else {
        return String(this);
    }

    return String(this + padding);
    
}

String.prototype.repeat = function(count) {
    return Array(count+ 1).join(this);
}
var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

var example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith("example"));
console.log(example.startsWith("something else"));

var example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));

var example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));

// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

var hello = "hello";
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));

