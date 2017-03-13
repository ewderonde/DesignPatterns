class ClubMatchingIterableIterator implements IterableIterator<Object> {
    private collection : string[];
    private pointer = 0;
    private iterator: ClubIterableIterator;
    private otherCollection : string[];
    private matchType: boolean;
    private matches: Object[];

    constructor(collection: string[]) {
        this.iterator = new ClubIterableIterator(clubs)
        this.collection = collection;
        this.matches = new Array();
     }

    public next(): IteratorResult<Object> {
        if (this.hasNext()) {
            let matchingArray = new Array();
            // for (let club in this.iterator) {
            //     if(club != this.collection[this.pointer]){
            
            //         let matchedClubs = {
            //             'home': (this.matchType)? this.collection[this.pointer] : club,
            //             'out': (this.matchType)? club : this.collection[this.pointer]
            //         };
                    
            //         this.matchType != this.matchType;

            //         this.matches.push(matchedClubs);
            //         matchingArray.push(matchedClubs);
            //     }
            // }

            this.pointer++;

            return {
                done: false,
                value: matchingArray
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

