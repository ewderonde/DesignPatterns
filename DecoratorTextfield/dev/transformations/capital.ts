class Capital extends TextTransformer {
    private transformer: TextTransformer;

    constructor (transformer: TextTransformer) {
        super();
        this.transformer = transformer;
    }

    public transform (string: string) {
        let transformedText = string.toUpperCase();

        TransformationDebug.Instance.addDebugLine('Capital', transformedText);
        return this.transformer.transform(transformedText);
    }
}