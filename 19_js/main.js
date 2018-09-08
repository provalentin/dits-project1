const operators = {
    multiply: true,
    //...
};

/**
 *
 * @param {string} type
 * @param {boolean} val
 */
function changeOperator(type, val) {
    this.operators[type] = val;
}
/**
 *
 * @param {Event} e
 */
function onPanelItemClick(e) {
    // some code
    showPanel(e.target.dataset.content)
}

function onChecklick() {
    //...
    checkInput();
}

/**
 *
 * @param {string} targetId
 */
function showPanel(targetId) {
    // some code
}

function checkInput() {
    // some code
}

/**
 *
 * @param {number} min
 * @param {number} max
 */
function generateTests(min = 1, max = 10) {
    // Remove current
    // Random generate within min-max
}

/**
 *
 * @param {array} test
 */
function renderTests(test) {

}