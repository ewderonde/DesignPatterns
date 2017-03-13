class SimpleIterator implements IteratorInterface {

    private collection : number[];
    private pointer = 0;

    constructor(collection: number[]) {
        this.collection = collection;
     }

    public next(): Object {
        if(this.hasNext()) {
            return this.collection[this.pointer++];
        } else {
            return null;
        }
    }

    public hasNext(): boolean {
        if (this.pointer < this.collection.length) {
            return true;
        } else {
            return false;
        }
    }
}

