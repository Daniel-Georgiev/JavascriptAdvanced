function testContext() {
    console.log(this);
}

//testContext();

function anotherFuntion() {
    testContext();
}

//anotherFuntion();

var simpleObject = new testContext();
console.log(simpleObject);
// In the case of testContext and the second function (anotherFunction, where testContext is called) 
// this can be invoked, whereas calling new instance of the object returns two empty objects.  