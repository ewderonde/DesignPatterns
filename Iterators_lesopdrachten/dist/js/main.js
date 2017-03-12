window.addEventListener("load", function () {
    let simpleIterator = new SimpleIterator([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    let typeScriptIterator = new TypeScriptIterator([89, 144, 233, 377, 610, 987, 1597]);
    let typeScriptItrableIterator = new TypeScriptIterableIterator([2584, 4181, 6765, 10946]);
    function* idMaker() {
        let randomChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "A", "B", "C", "D", "E", "F", "G", "H", "I", 0, 1, 2, 3, 4, 5, 6];
        let idString = "";
        let index = 0;
        while (idString.length < 10) {
            let r = Math.round(Math.random() * (randomChars.length - 1));
            let char = randomChars[r];
            idString += char;
            yield char;
        }
    }
    let gen = idMaker();
    while (simpleIterator.hasNext()) {
        addToOutput('Simple Iterator: ' + simpleIterator.next());
    }
    while (typeScriptIterator.hasNext()) {
        addToOutput('Typescript Iterator: ' + typeScriptIterator.next().value);
    }
    while (typeScriptItrableIterator.hasNext()) {
        addToOutput('Typescript Iterable Iterator: ' + typeScriptItrableIterator.next().value);
    }
    function addToOutput(s) {
        let output = document.getElementById('output-list');
        let newLi = document.createElement('li');
        newLi.innerHTML = s;
        output.appendChild(newLi);
    }
});
class SimpleIterator {
    constructor(collection) {
        this.pointer = 0;
        this.collection = collection;
    }
    next() {
        var result = this.collection[this.pointer];
        this.pointer += 1;
        return result;
    }
    hasNext() {
        if (this.pointer < this.collection.length) {
            return true;
        }
        else {
            return false;
        }
    }
}
class TypeScriptIterableIterator {
    constructor(collection) {
        this.pointer = 0;
        this.collection = collection;
    }
    next() {
        return {
            done: false,
            value: this.collection[this.pointer++]
        };
    }
    hasNext() {
        if (this.pointer < this.collection.length) {
            return true;
        }
        else {
            return false;
        }
    }
    [Symbol.iterator]() {
        return this;
    }
}
class TypeScriptIterator {
    constructor(collection) {
        this.pointer = 0;
        this.collection = collection;
    }
    next() {
        let pointer = this.pointer;
        this.pointer++;
        return {
            done: false,
            value: this.collection[pointer]
        };
    }
    hasNext() {
        if (this.pointer < this.collection.length) {
            return true;
        }
        else {
            return false;
        }
    }
    [Symbol.iterator]() {
        return this;
    }
}
//# sourceMappingURL=main.js.map