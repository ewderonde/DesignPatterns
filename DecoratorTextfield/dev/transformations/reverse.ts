class Reverse extends TextTransformer {
    private transformer: TextTransformer;

    constructor (transformer: TextTransformer) {
        super();
        this.transformer = transformer;
    }

    public transform (string: string) {
        let transformedText = string.split('').reverse().join('');
        
        TransformationDebug.Instance.addDebugLine('Reverse', transformedText);
        return this.transformer.transform(transformedText);
    }
}