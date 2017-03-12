class SimpleIterator implements IteratorInterface {

    private collection : number[];
    private pointer = 0;

    constructor(collection: number[]) {
        this.collection = collection;
     }

    public next(): Object {
        var result = this.collection[this.pointer];
        this.pointer += 1;
        return result;
    }

    public hasNext(): boolean {
        if (this.pointer < this.collection.length) {
            return true;
        } else {
            return false;
        }
    }
}

