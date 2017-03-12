class LowerCase extends TextTransformer {
    private transformer: TextTransformer;

    constructor (transformer: TextTransformer) {
        super();
        this.transformer = transformer;
    }

    public transform (string: string) {
        let transformedText = string.toLowerCase();

        TransformationDebug.Instance.addDebugLine('Lower Case', transformedText);
        return this.transformer.transform(transformedText);
    }
}