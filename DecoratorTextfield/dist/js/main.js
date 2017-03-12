class Main {
    constructor() {
        let submit = document.getElementById("submit");
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
        this.transformationQueue = new TransformationQueue();
        TransformationDebug.Instance.showLog();
    }
    handleSubmit() {
        let form = document.getElementById('the-form');
        let text = form.search.value;
        if (text.length > 0) {
            this.transformationQueue.transformString(text);
        }
        else {
            document.getElementById('output').innerHTML = 'Please enter some text.';
            TransformationDebug.Instance.showLog();
        }
    }
}
window.addEventListener("load", () => new Main());
class TextTransformer {
    constructor() {
    }
    transform(string) {
        return string;
    }
}
class TransformationDebug {
    constructor() {
        this.debugContainer = document.getElementById('debug-container');
        this.debugList = [];
    }
    static get Instance() {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new TransformationDebug();
        }
        return this.instance;
    }
    addDebugLine(type, transformedText) {
        this.debugList.push('<strong>' + type + ':</strong> ' + transformedText);
    }
    showLog() {
        let list = document.getElementById('debug-list');
        let logTitle = document.getElementById('log-title');
        list.innerHTML = null;
        if (this.debugList.length > 0) {
            for (let i = 0; i < this.debugList.length; i++) {
                let li = document.createElement('li');
                li.innerHTML = this.debugList[i];
                list.appendChild(li);
            }
            logTitle.removeAttribute('hidden');
        }
        else {
            logTitle.setAttribute('hidden', 'true');
        }
        this.debugList = [];
    }
}
class TransformationQueue {
    constructor() {
        this.selectedTransformations = new Array();
        this.transformations = document.getElementsByClassName('transformation');
        for (let i = 0; i < this.transformations.length; i++) {
            this.transformations[i].addEventListener('click', () => this.addTransformation(this.transformations[i]));
        }
    }
    transformString(string) {
        let textTransformer = new TextTransformer();
        let selectedOptions = document.getElementsByClassName('selected-transformation');
        for (let i = this.selectedTransformations.length - 1; i >= 0; i--) {
            let value = this.selectedTransformations[i].value;
            textTransformer = this.determineTransformation(value, textTransformer);
        }
        let output = document.getElementById("output");
        output.style.display = "block";
        output.innerHTML = '<strong>Result: </strong>' + textTransformer.transform(string);
        TransformationDebug.Instance.showLog();
        document.getElementById('debug-container').removeAttribute('hidden');
    }
    removeTransformation(array) {
        for (let i = 0; i < this.selectedTransformations.length; i++) {
            if (this.selectedTransformations[i].value === array.value) {
                this.selectedTransformations.splice(i, 1);
            }
        }
        let option = document.getElementById('button' + array.value);
        option.setAttribute('class', 'btn btn-default transformation');
        this.updateTransformationOrder();
    }
    addTransformation(el) {
        let name = el.getAttribute('data-name');
        let value = el.getAttribute('data-value');
        let values = { 'value': value, 'name': name };
        console.log(this.inArray(values, this.selectedTransformations));
        if (!this.inArray(values, this.selectedTransformations)) {
            this.selectedTransformations.push(values);
            console.log(this.selectedTransformations);
            let option = document.getElementById('button' + value);
            option.setAttribute('class', 'btn btn-primary transformation');
            this.updateTransformationOrder();
        }
        else {
            this.removeTransformation(values);
        }
    }
    determineTransformation(s, textTransformer) {
        let transformer;
        switch (s) {
            case '1':
                transformer = new LowerCase(textTransformer);
                break;
            case '2':
                transformer = new Summary(textTransformer);
                break;
            case '3':
                transformer = new Capital(textTransformer);
                break;
            case '4':
                transformer = new Reverse(textTransformer);
                break;
            case '5':
                transformer = new Randomize(textTransformer);
                break;
        }
        return transformer;
    }
    inArray(array, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].value === array.value) {
                return true;
            }
        }
        return false;
    }
    updateTransformationOrder() {
        let output = document.getElementById('order');
        if (this.selectedTransformations.length > 0) {
            let transformationNames = [];
            for (let i = 0; i < this.selectedTransformations.length; i++) {
                transformationNames.push(this.selectedTransformations[i].name);
            }
            let output = document.getElementById('order');
            output.innerHTML = '<strong>Order:</strong> ' + transformationNames.join(' &#8594 ');
        }
        else {
            output.innerHTML = '';
        }
    }
}
class Capital extends TextTransformer {
    constructor(transformer) {
        super();
        this.transformer = transformer;
    }
    transform(string) {
        let transformedText = string.toUpperCase();
        TransformationDebug.Instance.addDebugLine('Capital', transformedText);
        return this.transformer.transform(transformedText);
    }
}
class LowerCase extends TextTransformer {
    constructor(transformer) {
        super();
        this.transformer = transformer;
    }
    transform(string) {
        let transformedText = string.toLowerCase();
        TransformationDebug.Instance.addDebugLine('Lower Case', transformedText);
        return this.transformer.transform(transformedText);
    }
}
class Randomize extends TextTransformer {
    constructor(transformer) {
        super();
        this.transformer = transformer;
    }
    transform(string) {
        let a = string.split(""), n = a.length;
        for (let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        let transformedText = a.join("");
        TransformationDebug.Instance.addDebugLine('Randomize', transformedText);
        return this.transformer.transform(transformedText);
    }
}
class Reverse extends TextTransformer {
    constructor(transformer) {
        super();
        this.transformer = transformer;
    }
    transform(string) {
        let transformedText = string.split('').reverse().join('');
        TransformationDebug.Instance.addDebugLine('Reverse', transformedText);
        return this.transformer.transform(transformedText);
    }
}
class Summary extends TextTransformer {
    constructor(transformer) {
        super();
        this.transformer = transformer;
    }
    transform(string) {
        let o = [];
        for (var i = 0; i <= 9; i++)
            o.push(string.charAt(i));
        let transformedText = o.join('');
        TransformationDebug.Instance.addDebugLine('Summary', transformedText);
        return this.transformer.transform(transformedText);
    }
}
//# sourceMappingURL=main.js.map