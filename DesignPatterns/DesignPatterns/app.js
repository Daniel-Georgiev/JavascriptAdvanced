var domModule = (function () {
    function appendElement(e) {
        var param = document.createElement('li'),
            checkbox = document.createElement('input'),
            parentNode = e.parentNode,
            textNode = parentNode.querySelector('input[type=\"text\"]').value,
            text = document.createTextNode(textNode),
            label = document.createElement('label'),
            appendTo = e.parentNode.querySelector('ul');
        
        checkbox.type = 'checkbox';
        param.appendChild(checkbox);
        
        
        
        label.appendChild(text);
        param.appendChild(label);
        
        appendTo.appendChild(param);
        
        (function Clear() {
            parentNode.querySelector('input[type=\"text\"]').value = '';
        })();
    }
    
    function appendSection(e) {
        var appendTo = document.querySelector('div'),
            section = document.createElement('section'),
            title = document.createElement('h3'),
            textNode = document.getElementById('SectionTitle').value,
            text = document.createTextNode(textNode),
            listOfItems = document.createElement('ul'),
            inputText = document.createElement('input'),
            addButton = document.createElement('input');
        
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', 'Add item...');
        
        addButton.setAttribute('type', 'button');
        addButton.setAttribute('value', 'Add');
        addButton.setAttribute('onclick', 'domModule.appendElement(this)');
        
        title.appendChild(text);
        section.appendChild(title);
        section.appendChild(listOfItems);
        section.appendChild(inputText);
        section.appendChild(addButton);
        appendTo.appendChild(section);
        
        
        (function Clear() {
            document.getElementById('SectionTitle').value = '';
        })();
    }
    
    return {
        appendElement: appendElement,
        appendSection: appendSection
    }
}());