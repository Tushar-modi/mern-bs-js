function reverseNumber() {
  const numberInput = document.getElementById('numberInput').value;
  const x = parseInt(numberInput, 10);

  if (!isNaN(x)) {
      const reversedNumber = reverseNumberLogic(x);
      document.getElementById('output').textContent = `Reversed: ${reversedNumber}`;
  } else {
      document.getElementById('output').textContent = 'Invalid input. Please enter a valid number.';
  }
}

function reverseNumberLogic(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  const reversedString = x.toString().split('').reverse().join('');
  const reversedNumber = parseInt(reversedString, 10);
  if (isNegative) {
      return -reversedNumber;
  } else {
      return reversedNumber;
  }
}
