document.getElementById("multiplyButton").addEventListener("click", function() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const result = firstNumber * secondNumber;
        document.getElementById("resultValue").textContent = result;
    } else {
        document.getElementById("resultValue").textContent = "Invalid input. Please enter valid numbers.";
    }
});

document.getElementById("divideButton").addEventListener("click", function() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber) && secondNumber !== 0) {
        const result = firstNumber / secondNumber;
        document.getElementById("resultValue").textContent = result;
    } else {
        document.getElementById("resultValue").textContent = "Invalid input. Please enter valid numbers, and make sure the second number is not zero.";
    }
});
