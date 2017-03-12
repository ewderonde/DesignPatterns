class TypeScriptIterableIterator implements IterableIterator<Object> {


    private collection : number[];
    private pointer = 0;


    constructor(collection: number[]) {
        this.collection = collection;
     }

    public next(): IteratorResult<Object> {
        return {
            done: false,
            value: this.collection[this.pointer++]
        }
    }

    public hasNext(): Boolean {
        if (this.pointer < this.collection.length) {
            return true;
        } else {
            return false;
        }
    }

    [Symbol.iterator](): IterableIterator<Object> {
        return this;
    }
}

