function printArgsInfo() {
    for (var i = 0; i < arguments.length; i++) {
        var currentArg = typeof arguments[i];
        
        if (Array.isArray(arguments[i])) {
            console.log(arguments[i] + ' (array)');
        } else {
            console.log(arguments[i] + ' (' + currentArg + ')');
        }

    }
}

printArgsInfo(2, 3, 2.5, -110.5564, false);
printArgsInfo(null, undefined, '', 0, [], {}); 
printArgsInfo([1, 2], ['string', 'array'], ['single value']);
console.log();

console.log('Problem 2: call() and apply() ');
console.log();
printArgsInfo.call();
printArgsInfo.call(null, 2, 3, 2.5, -110.5564, false);
console.log()
printArgsInfo.apply();
printArgsInfo(null, [2, 3, 2.5, -110.5564, false]);