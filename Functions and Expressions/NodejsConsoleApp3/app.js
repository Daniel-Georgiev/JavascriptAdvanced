var specialConsole = (function specialConsole() {

    function writeLine() {
        if (arguments.length === 1) {
            console.log(arguments[0]);
        } else {
            console.log(writeWithArguments(arguments));
        }
    }

    function writeError() {
        if (arguments.length === 1) {
            console.error(arguments[0]);
        } else {
            console.error(writeWithArguments(arguments));
        }
    }
    
    function writeWarning() {
        if (arguments.length === 1) {
            console.warn(arguments[0]);
        } else {
            console.warn(writeWithArguments(arguments));
        }
    }
    
    function writeInfo() {
        if (arguments.length === 1) {
            console.info(arguments[0]);
        } else {
            console.info(writeWithArguments(arguments));
        }
    }
    

    function writeWithArguments(args) {
            var pattern = args[0];
        var placeholders = pattern.match(/{[0-9]}+/g);
        var replacements = [];
        replacements[0] = pattern.replace(placeholders[0], args[1]);
        if (placeholders.length > 1) {
            for (var i = 1; i < placeholders.length; i++) {
                replacements[i] = replacements[i - 1].replace(placeholders[i], args[i + 1]);
            }
        } 
        var strResult = replacements[replacements.length - 1].toString();
        return strResult;
        }


    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeInfo: writeInfo
        }
    
})();


specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name } });
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg } });

