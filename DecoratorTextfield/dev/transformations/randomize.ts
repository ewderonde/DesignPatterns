class Randomize extends TextTransformer {
    private transformer: TextTransformer;

    constructor (transformer: TextTransformer) {
        super();
        this.transformer = transformer;
    }

    public transform (string: string) {
        let a = string.split(""),
        n = a.length;

        for(let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        let transformedText = a.join("");
        
        TransformationDebug.Instance.addDebugLine('Randomize', transformedText);
        return this.transformer.transform(transformedText);
    }
}