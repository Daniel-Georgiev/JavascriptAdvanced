var domModule = (function() {
    function appendChild() {
        var element = arguments[0];
        var child = document.querySelector(arguments[1]);

        child.appendChild(element);
    }
    
    function removeChild() {
        var element = arguments[0];
        var child = document.querySelector(arguments[1]);

        child.removeChild(element);
    }

    function addHandler() {
        var elements = document.querySelectorAll(arguments[0]);
        var eventType = arguments[1];
        var eventHandler = arguments[2];

        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener(eventType, eventHandler);
        }
    }

    function retrieveElements() {
        var selector = arguments[0];

        var elements = document.querySelectorAll(selector);
        return elements;
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }
}());

//var liElement = document.createElement('li');
//// Appends a list item to ul.birds-list
//domModule.appendChild(liElement, '.birds-list');
//// Removes the first li child from the bird list
//domModule.removeChild('ul.birds-list', 'li:first-child');
//// Adds a click event to all bird list items
//domModule.addHandler('li.birds', 'click', function () { alert('I'm a bird!') });
//// Retrives all elements of class 'bird'
