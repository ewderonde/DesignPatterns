class TransformationQueue {
    private selectedTransformations = new Array();
    private transformations;
  
    constructor() {
        this.transformations = document.getElementsByClassName('transformation');

        for(let i = 0; i < this.transformations.length; i++) {
            this.transformations[i].addEventListener('click', () => this.addTransformation(this.transformations[i]));
        }
    }

    public transformString(string) {
        let textTransformer = new TextTransformer();
        
        // Checken welke transformations er gekozen zijn.
        let selectedOptions = document.getElementsByClassName('selected-transformation');
        for(let i = this.selectedTransformations.length -1; i >= 0 ; i--) {
            let value = this.selectedTransformations[i].value;
            textTransformer = this.determineTransformation(value, textTransformer);
        }

        // Toon output.
        let output = document.getElementById("output");
        output.style.display = "block";
        output.innerHTML = '<strong>Result: </strong>' + textTransformer.transform(string); 

        // show debug log.
        TransformationDebug.Instance.showLog();

        // Show debug container.
        document.getElementById('debug-container').removeAttribute('hidden');
    }
    
    public removeTransformation(array) {
        for (let i = 0; i < this.selectedTransformations.length; i++) {
            if (this.selectedTransformations[i].value === array.value) {
                this.selectedTransformations.splice(i, 1);
            }
        }

        // Re-enable option button.
        let option = document.getElementById('button'+ array.value);
        option.setAttribute('class', 'btn btn-default transformation');

        // update transformation order.
        this.updateTransformationOrder();
    }

    public addTransformation(el: HTMLElement) {   
        let name =  el.getAttribute('data-name');
        let value =  el.getAttribute('data-value');
        let values = {'value': value, 'name': name};

        console.log(this.inArray(values, this.selectedTransformations));
        // Check if option is already selected.
        if(!this.inArray(values, this.selectedTransformations)) {
            // Add to array of chosen transformations.
            this.selectedTransformations.push(values);
            
            console.log(this.selectedTransformations);
            // Change button class.
            let option = document.getElementById('button'+ value);
            option.setAttribute('class', 'btn btn-primary transformation');

            // update transformation order
            this.updateTransformationOrder();
        } else {
            // Remove option from list.
            this.removeTransformation(values);
        }
        
    }

    private determineTransformation(s: string, textTransformer: TextTransformer) { 
        let transformer: TextTransformer;
        switch(s) {
            case '1':
                transformer = new LowerCase(textTransformer);
                break;
            case '2':
                transformer = new Summary(textTransformer);
                break;
            case '3':
                transformer = new Capital(textTransformer);
                break;
            case '4':
                transformer = new Reverse(textTransformer);
                break;
            case '5':
                transformer = new Randomize(textTransformer);
                break;
        }
        return transformer;
    }

    private inArray(array, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].value === array.value) {
                return true;
            }
        }
        return false;
    }

    private updateTransformationOrder() {
        let output = document.getElementById('order');

        if(this.selectedTransformations.length > 0) {
            // Create new order.
            let transformationNames = [];
            for(let i = 0; i < this.selectedTransformations.length; i++) {
                transformationNames.push(this.selectedTransformations[i].name);
            }

            let output = document.getElementById('order');
            output.innerHTML = '<strong>Order:</strong> '+ transformationNames.join(' &#8594 ');
        } else {
            // Clear order.
            output.innerHTML = '';
        }
        
    }
}