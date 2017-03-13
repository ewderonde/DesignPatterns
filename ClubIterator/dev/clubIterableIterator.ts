class ClubIterableIterator implements IterableIterator<Object> {
    private collection : string[];
    private pointer = 0;
    private iterator: ClubIterableIterator;


    constructor(collection: string[]) {
        this.iterator = new ClubIterableIterator(clubs)
        this.collection = collection;
     }

    public next(): IteratorResult<Object> {
        if (this.hasNext()) {
            return {
                done: false,
                value: this.collection[this.pointer++]
            }
        } else {
            return {
                done: true,
                value: null
            }
        }
    }
    
    public hasNext(): Boolean {
        return this.pointer < this.collection.length;
    }

    [Symbol.iterator](): IterableIterator<Object> {
        return this;
    }
}

