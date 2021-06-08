function fillTable() {
  const table1 = document.getElementsByClassName('table-row1');
  const table2 = document.getElementsByClassName('table-row2');
  for (let i = 0; i < table1.length; ++i) {
    for (let j = 0; j <= 25; ++j) {
      const row1 = table1[i];
      const row2 = table2[i];
      const cell1 = row1.insertCell(j + 1);
      const cell2 = row2.insertCell(j + 1);
      cell1.innerHTML = String.fromCharCode(65 + j);
      cell2.innerHTML = j+1;
    }
  }
}
fillTable();

function getRandZeros() {
  const zeros = ['1', '2', '3', '4', '5', '7'];
  return zeros[Math.floor(Math.random() * zeros.length)];
}

function getRandOnes() {
  const ones  = ['0', '6', '9'];
  return ones[Math.floor(Math.random() * ones.length)];
}

function getRandTwo() {
  return '8';
}

function createCircleNum(letterNum) {
  let circleLeft = letterNum;
  let message = '';
  let option = 0.0;
  let circleOption = 0;
  // iterate for each character in message
  for (let i = 13; i != 0; --i) {
    // determine if char must have 0, 1, or 2 circles
    option = circleLeft / i;
    // must have 2 circles
    if (option === 2) {
      message += getRandTwo();
      circleLeft -= 2;
    // must have at least 1 circle
    } else if (option >= 1) {
      // have option of getting 1 or 2 circles
      if (circleLeft >= 2) {
        // randomly choose 1 or 2 circles
        circleOption = Math.floor(Math.random() * 2);
        // chose 1 circle
        if (circleOption === 1) {
          message += getRandOnes();
          circleLeft -= 1;
        // chose 2 circles
        } else {
          message += getRandTwo();
          circleLeft -= 2;
        }
      // must have 1 circle
      } else {
        message += getRandOnes();
        circleLeft -= 1;
      }
    // can have circles depending on circles left
    } else {
      // if circles left is 2 or greater
      if (circleLeft >= 2) {
        // randomly choose 0, 1, or 2 circles
        circleOption = Math.floor(Math.random() * 3);
        // chose 2 circle
        if (circleOption === 2) {
          message += getRandTwo();
          circleLeft -= 2;
        // chose 1 circle
        } else if (circleOption === 1){
          message += getRandOnes();
          circleLeft -= 1;
        // chose 0 circles
        } else {
          message += getRandZeros();
        }
      // if circles left is 1
      } else if (circleLeft === 1) {
        // randomly choose 0 or 1 circles
        circleOption = Math.floor(Math.random() * 2);
        // chose 1 circle
        if (circleOption === 1) {
          message += getRandOnes();
          circleLeft -= 1;
        // chose 0 circles
        } else {
          message += getRandZeros();
        }
      // if circle left is 0
      } else {
        message += getRandZeros();
      }
    }
  }
  return message;
}

function encrypt() {
  const inputText = document.getElementById('encrypt-text').value;
  const stripText = inputText.toUpperCase().replace(/[^A-Z ]/g, '');
  let encryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < stripText.length; ++i) {
    charCode = stripText.charCodeAt(i);
    encryptedMessage += createCircleNum(charCode-64);
    encryptedMessage += ' ';
  }
  document.getElementById('encrypt-text-output').innerHTML = encryptedMessage;
}

function countCircles(num) {
  let totalCircles = 0;
  for (let i = 0; i < num.length; ++i) {
    switch (num[i]) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '7':
        totalCircles += 0;
        break;
      case '0':
      case '6':
      case '9':
        totalCircles += 1;
        break;
      case '8':
        totalCircles += 2;
        break;
      default:
        return ' ';
    }
  }
  return String.fromCharCode(64 + totalCircles);
}

function decrypt() {
  const inputText = document.getElementById('decrypt-text').value;
  const stripText = inputText.toUpperCase().replace(/[^0-9 ]/g, '');
  const numArray = stripText.split(' ');
  let decryptedMessage = '';
  for (let i = 0; i < numArray.length; ++i) {
    if (numArray[i] != '') {
      decryptedMessage += countCircles(numArray[i]);
    }
  }
  document.getElementById('decrypt-text-output').innerHTML = decryptedMessage;
}
