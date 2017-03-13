class Main {
    constructor() {
        this.initialize();
    }

    public initialize () {
        let clubMatchMaker = new ClubMatchingIterableIterator(clubs);

        for (let matches of clubMatchMaker) {
            console.log(matches);
        }
    }
}

window.addEventListener("load", () => new Main());