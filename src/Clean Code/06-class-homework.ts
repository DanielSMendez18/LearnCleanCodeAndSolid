(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    // type HtmlType = 'input'|'select'|'textarea'|'radio';

    // class HtmlElement {
    //     constructor(
    //         public id: string,
    //         public type: HtmlType,
    //     ) {}
    // }

    // class InputAttributes extends HtmlElement {
    //     constructor(
    //         public value: string,
    //         public placeholder: string,
    //         id: string,
    //     ) {
    //         super(id, 'input');
    //     }
    // }

    // class InputEvents extends InputAttributes {
    //     constructor( value: string, placeholder: string, id: string ) {
    //         super( value, placeholder, id );
    //     }

    //     setFocus() {};
    //     getValue() {};
    //     isActive() {};
    //     removeValue() {};
    // }

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) { }
    }

    class InputEvents {
        constructor() { }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }


    //? Idea para la nueva clase InputElement
    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvent: InputEvents;

        constructor(value: string, placeholder: string, id: string) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvent = new InputEvents();
        }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()