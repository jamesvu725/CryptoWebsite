function getLetter(number) {
  const firstDigit = parseInt(number[0]);
  const secondDigit = parseInt(number[1]);
  // if first or second digit is not between 1-5 inclusive then return invalid number
  if (firstDigit < 1 || firstDigit > 5 || secondDigit < 1 || secondDigit > 5) {
    return 'invalid number';
  }
  // get charCode based off of row and column
  const charCode = 59 + 5 * firstDigit + secondDigit;
  if (charCode == 89) {
    return 'Y/Z';
  }
  return String.fromCharCode(charCode);
}

function fillTable() {
  const table1 = document.getElementsByClassName('number-five-by-five');
  const table2 = document.getElementsByClassName('alphabet-five-by-five');
  for (let i = 0; i < table1.length; ++i) {
    for (let j = 0; j < 5; ++j) {
      const row1 = table1[i].insertRow(j);
      const row2 = table2[i].insertRow(j);
      for (let k = 0; k < 5; ++k) {
        const cell1 = row1.insertCell(k);
        const cell2 = row2.insertCell(k);
        const num = (j+1).toString() + (k+1).toString();
        cell1.innerHTML = num;
        cell2.innerHTML = getLetter(num);
      }
    }
  }
}
fillTable();

function getNumber(charCode) {
  // subtract ASCII A from charCode
  let num = charCode - 64;
  // get the second digit by using modulus
  let secondDigit = num % 5;
  // if modulus is 0, make it 5
  if (secondDigit == 0) {
    secondDigit = 5;
  }
  // subtract modulus from number
  num -= secondDigit;
  // calculate first digit and add 1 since it can't start from 0
  let firstDigit = (num / 5) + 1;
  // if firstDigit is greater than 5, then the letter must be Z
  if (firstDigit > 5) {
    return '55';
  }
  return firstDigit.toString() + secondDigit.toString();
}

function encrypt() {
  // get the input text from document
  const inputText = document.getElementById('encrypt-text').value;
  // strip input text to only include space and letters
  const stripText = inputText.toUpperCase().replace(/[^A-Z ]/g, '');
  let encryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < stripText.length; ++i) {
    if (stripText[i] === ' ') {
      encryptedMessage += '/ ';
    } else {
      charCode = stripText.charCodeAt(i);
      encryptedMessage += getNumber(charCode) + ' ';
    }
  }
  document.getElementById('encrypt-text-output').innerHTML = encryptedMessage;
}

function decrypt() {
  const inputText = document.getElementById('decrypt-text').value;
  const stripText = inputText.replace(/[^0-9 /]/g, '');
  const numArray = stripText.split(' ');
  let decryptedMessage = '';
  for (let i = 0; i < numArray.length; ++i) {
    if (numArray[i] != '/') {
      decryptedMessage += getLetter(numArray[i]);
    } else {
      decryptedMessage += ' ';
    }
  }
  document.getElementById('decrypt-text-output').innerHTML = decryptedMessage;
}
