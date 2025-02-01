window.addEventListener("load", () => {
    const odt = new ODTPageEditor();
    if (odt.isPaywallActive()) odt.removePaywall()
})

class ODTPageEditor {
    
    #paywallContainer;
    #paywallOverlay;

    constructor() {
        this.#paywallContainer = document.querySelector("div.bw-container");
        this.#paywallOverlay = document.querySelector("div.bw-lb")
    }

    isPaywallActive() {
        return this.#paywallContainer !== null;
    }

    removePaywall() {
        this.#paywallContainer.style = this.#paywallOverlay.style = "display:none;"; // hide paywall
        document.body.style = "overflow-y: scroll !important;" // re-enable vertical scrolling
    }

}
