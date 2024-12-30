function clearDisplay() {
    document.getElementById("display").value = '';
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        // Using eval to evaluate the expression (handle with care)
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
