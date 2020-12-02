export const DATA = {
	HIDDEN_CLASS: "hidden",
	LOADER_SELECTOR: "[data-loader]",
	MAINMENU_SELECTOR: "[data-mainWrap]",
	MAINWRAP_SELECTOR: "[data-mainWrap]",
	//THESE DIMENTIONS ALSO SET IN SCSS MAINWRAP
	CANVAS_BASE_WIDTH: 640,
    CANVAS_BASE_HEIGHT: 360,
}

export class TheDOM {
	constructor(selector) {
		if (typeof selector === 'undefined') return console.warn("undefined selector!");
		this.domSelectors = { visibilityToggleTest: ".visibilityTest", }
		this.element = this.bindWithElement(selector);
		this.visibilityToggleTestElement = this.bindWithElement(this.domSelectors.visibilityToggleTest);
		//MUST BE IN THE CONSTRUCTOR AS INHERITORS WILL NOT PERFORM METHODS:
		this.toggleVisibility(this.visibilityToggleTestElement, 'invisible');
		this.initializeTheDOM(selector);		
	}

	bindWithElement(domSelector) {
		const element = document.querySelector(domSelector);
		if (!element) {
			throw new Error(`ERROR: unable to bind with: ${domSelector}`);
		}
		return element;
	}

	toggleVisibility(element, mode) {
		mode === 'invisible'
			? element.classList.add(DATA.HIDDEN_CLASS)
			: element.classList.remove(DATA.HIDDEN_CLASS);
	}

	initializeTheDOM(receivedDomSelector) {
		//TESTS START
		console.log('visibilityToggleTestElement :', this.visibilityToggleTestElement);
		console.log('TheDOM constructor here, called by', this, 'received selector: ', receivedDomSelector);
		console.log('binding the calling instance with:', this.element);
		console.log('performing visibilityTest - this element should get display none: ', this.visibilityToggleTestElement);
		//TESTS END
	}
}