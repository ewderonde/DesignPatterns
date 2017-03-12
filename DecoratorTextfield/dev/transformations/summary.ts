class Summary extends TextTransformer {
    private transformer: TextTransformer;

    constructor (transformer: TextTransformer) {
        super();
        this.transformer = transformer;
    }

    public transform (string: string) {
        let o = [];
        for (var i = 0; i <= 9; i++)
            o.push(string.charAt(i));
        
        let transformedText = o.join('');

        TransformationDebug.Instance.addDebugLine('Summary', transformedText);
        return this.transformer.transform(transformedText);
    }
}