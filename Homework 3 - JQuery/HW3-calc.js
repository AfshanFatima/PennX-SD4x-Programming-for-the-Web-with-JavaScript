/*
 * Implement all your JavaScript in this file!
 */
// map operator buttons id with thier function
// map operator buttons id with their function
const functionMap = {
    "addButton": (a, b) => a + b,
    "subtractButton": (a, b) => a - b,
    "multiplyButton": (a, b) => a * b,
    "divideButton": (a, b) => a / b
};

// give an array, values at index 0 and 2, operator at index 1
// calculate the operation
function evaluate(stack) {
    return functionMap[stack[1]](stack[0], stack[2]);
};

const stack = '';

$(function () {
    $(".digit").click(function () {
        stack += $(this).text();
        console.log($(this).text());
        console.log(stack);
    });
});

$(".operator").click(function () {
    if (stack.length === 3) { // just perform operation
        if (stack.length === 3) { // just perform an operation and continue another
            stack = [];
            stack.push(Number(display));
            stack.push(this.id);
        } else if (stack.length === 2) { // in middle of operation
            if (isNaN(current)) { // operator after operator
                stack[1] = this.id;
            } else {
                if (isNaN(current)) { // operator after operator 
                    stack[1] = this.id; // replace with the recent
                } else { // user have inputed the right hand side of the operation
                    stack.push(Number(display));
                    display = evaluate(stack);
                    $("#display").val(display);
                    stack = [display, this.id];
                    stack = [display, this.id]; // ready for the next operation

                }else {
                    if (stack.length === 1) { // user have inputed the left hand side of the operation and pressed the equals button
                        stack.push(this.id);
                    }
                    else { // user have inputed the left hand side
                        stack.push(Number(display));
                        stack.push(this.id);
                        display = '';
                    }
                    current = NaN;
                    console.log(stack);
                    // console.log(stack);
                    display = '';
                };

                $("#equalsButton").click(function () {
                    console.log(stack);

                    // console.log(stack); 		
                    if (stack.length === 0) { // reset state
                        if (current) { // user have inputed some numbers
                            stack = [current];
                        }
                    } else if (stack.length === 2) {
                        if (!isNaN(current)) {
                        } else if (stack.length === 2) {
                            if (!isNaN(current)) { // basic use case
                                stack.push(Number(display));
                                console.log(stack);
                                display = evaluate(stack);
                                $("#display").val(display);

                            }
                        } else if (stack.length === 3) {
                            $("#display").val(display);
                        } // else ignore		
                    } else if (stack.length === 3) { // the previous operation should be repeated using the result of the operation and the most recently entered operand
                        stack[0] = display;
                        display = evaluate(stack);
                        $("#display").val(display);
                    }
                });
