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

