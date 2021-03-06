﻿Array.prototype.flatten = function () {
    
    function flattenDeeper(array, flatten) {
        
        if (!flatten) {
            flatten = [];
        }
        
        for (var i = 0; i < array.length; i++) {
            
            if (array[i] instanceof Array) {
                flattenDeeper(array[i], flatten);
            } else {
                flatten.push(array[i]);
            }
        }
        return flatten;
    }
    
    return flattenDeeper(this);
}


var array = [1, 2, 3, 4];
console.log(array.flatten());

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed

var array = [0, ['string', 'values'], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());