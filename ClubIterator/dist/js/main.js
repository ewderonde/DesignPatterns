class ClubIterableIterator {
    constructor(collection) {
        this.pointer = 0;
        this.iterator = new ClubIterableIterator(clubs);
        this.collection = collection;
    }
    next() {
        if (this.hasNext()) {
            return {
                done: false,
                value: this.collection[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    }
    hasNext() {
        return this.pointer < this.collection.length;
    }
    [Symbol.iterator]() {
        return this;
    }
}
class ClubMatchingIterableIterator {
    constructor(collection) {
        this.pointer = 0;
        this.iterator = new ClubIterableIterator(clubs);
        this.collection = collection;
        this.matches = new Array();
    }
    next() {
        if (this.hasNext()) {
            let matchingArray = new Array();
            this.pointer++;
            return {
                done: false,
                value: matchingArray
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    }
    hasNext() {
        return this.pointer < this.collection.length;
    }
    [Symbol.iterator]() {
        return this;
    }
}
let clubs = [
    "Feyenoord",
    "Ajax",
    "PSV",
    "FC Utrecht",
    "AZ",
    "FC Twente",
    "sc Heerenveen",
    "Vitesse",
    "Willem II",
    "FC Groningen",
    "Heracles Almelo",
    "NEC",
    "PEC Zwolle",
    "Sparta Rotterdam",
    "Go Ahead Eagles",
    "Excelsior",
    "Roda JC Kerkrade",
    "ADO Den Haag"
];
class Main {
    constructor() {
        this.initialize();
    }
    initialize() {
        let clubMatchMaker = new ClubMatchingIterableIterator(clubs);
        for (let matches of clubMatchMaker) {
            console.log(matches);
        }
    }
}
window.addEventListener("load", () => new Main());
//# sourceMappingURL=main.js.map