class Main {
    private transformationQueue: TransformationQueue;

    constructor () {
        let submit = document.getElementById("submit");
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        this.transformationQueue = new TransformationQueue();
        TransformationDebug.Instance.showLog();
    }

    public handleSubmit() {
        let form = document.getElementById('the-form');
        let text = form.search.value;

        if(text.length > 0) {
            this.transformationQueue.transformString(text);
        } else {
            document.getElementById('output').innerHTML = 'Please enter some text.';
            TransformationDebug.Instance.showLog();
        }
    }
}

window.addEventListener("load", () => new Main());
