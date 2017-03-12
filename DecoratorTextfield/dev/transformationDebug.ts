class TransformationDebug {
    private static instance: TransformationDebug;
    private debugContainer: HTMLElement;
    private debugList: string[];

    constructor () {
        this.debugContainer = document.getElementById('debug-container');
        this.debugList = [];
    }

    static get Instance() {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new TransformationDebug();
        }
        return this.instance;
    }

    public addDebugLine(type: string, transformedText: string) {
        this.debugList.push('<strong>'+type+':</strong> '+ transformedText);
    }

    public showLog() {
        let list = document.getElementById('debug-list');
        let logTitle = document.getElementById('log-title');
        list.innerHTML = null;

        if(this.debugList.length > 0) {
            for(let i = 0; i < this.debugList.length ; i++) {
                let li = document.createElement('li');
                li.innerHTML = this.debugList[i];
                list.appendChild(li);
            }
            logTitle.removeAttribute('hidden');
        } else {
            
            logTitle.setAttribute('hidden', 'true');
        }
        

        // Clear list once log has been shown.
        this.debugList = [];
    }
}