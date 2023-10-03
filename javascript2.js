function sortString() {
  const stringInput = document.getElementById('stringInput').value;
  const sortedString = sortStringAlphabetically(stringInput);
  document.getElementById('output').textContent = `Input String: ${stringInput}\nSorted String: ${sortedString}`;
}

function sortStringAlphabetically(inputString) {
  const charArray = inputString.split('');
  const sortedArray = charArray.sort();
  const sortedString = sortedArray.join('');
  return sortedString;
}
