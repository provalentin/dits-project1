function add(a, b) {
    return a+b
}

function substract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b
}

function divide(a, b) {
    if(b===0) {
        $('validation').text("Can't divide to 0");
        return "error";
    }
    return a/b;
}

function notSupported() {
    $('validation').text("Not supported operation");
    return "error";
}

function validate_input(number) {
    var isValid = true;
    number = number.toString().trim();
    if(number.length === 0){
        $('validation').text("Need more numbers");
        isValid = false;
    } else if(!/^\d+$/.test(number)) {
        $('validation').text("Wrong code" + number);
        isValid = false;
    }
    return isValid;


}

function calculate(a,b, op) {
    console.log("a:" + a + " b: " + b + " op: " + op);
    if(!validate_input(a)) return "error";
    if(!validate_input(b)) return "error";
    a = parseFloat(a);
    b = parseFloat(b);
    switch(op) {
        case "+": return add(a, b);
        case "-": return substract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default : return notSupported();
    }

}