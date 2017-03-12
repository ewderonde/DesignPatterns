class TypeScriptIterator implements Iterator<Object> {

    private collection : number[];
    private pointer = 0;

    constructor(collection: number[]) {
        this.collection = collection;
     }

    public next(): IteratorResult<Object> {
        let pointer = this.pointer;
        this.pointer++;
        return {
            done: false,
            value: this.collection[pointer]
        }
    }

    public hasNext(): Boolean {
        if (this.pointer < this.collection.length) {
            return true;
        } else {
           return false;
        }
    }

    [Symbol.iterator](): Iterator<Object> {
        return this;
    }
}

