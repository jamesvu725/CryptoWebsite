function encrypt() {
  const inputText = document.getElementById('encrypt-text').value;
  const option = document.querySelector('input[name="encrypt-option"]:checked').value;
  let stripText = inputText.replace(/[^A-Z a-z]/g, '');
  if (option === "only-upper") {
    stripText = stripText.toUpperCase();
  } else if (option === "only-lower") {
    stripText = stripText.toLowerCase();
  }
  let encryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < stripText.length; ++i) {
    if (stripText[i] === ' ') {
      encryptedMessage += '/ ';
    } else {
      encryptedMessage += stripText.charCodeAt(i) + ' ';
    }
  }
  document.getElementById('encrypt-text-output').innerHTML = encryptedMessage;
}

function decrypt() {
  const inputText = document.getElementById('decrypt-text').value;
  const stripText = inputText.replace(/[^0-9 /]/g, '');
  const numArray = stripText.split(' ');
  let decryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < numArray.length; ++i) {
    if (numArray[i] != '/') {
      decryptedMessage += String.fromCharCode(parseInt(numArray[i], 10));
    } else {
      decryptedMessage += ' ';
    }
  }
  document.getElementById('decrypt-text-output').innerHTML = decryptedMessage;
}

function fillTable() {
  const table1 = document.getElementsByClassName('table-row1');
  const table2 = document.getElementsByClassName('table-row2');
  const table3 = document.getElementsByClassName('table-row3');
  const table4 = document.getElementsByClassName('table-row4');
  const table5 = document.getElementsByClassName('table-row5');
  const table6 = document.getElementsByClassName('table-row6');
  // Uppercase Letters
  for (let i = 0; i < table1.length; ++i) {
    for (let j = 0; j <= 25; ++j) {
      const row1 = table1[i];
      const cell1 = row1.insertCell(j + 1);
      cell1.innerHTML = String.fromCharCode(65 + j);
    }
  }
  // Uppercase ASCII Letters
  for (let i = 0; i < table2.length; ++i) {
    for (let j = 0; j <= 25; ++j) {
      const row2 = table2[i];
      const cell2 = row2.insertCell(j + 1);
      cell2.innerHTML = 65+j;
    }
  }
  // Lowercase letters
  for (let i = 0; i < table3.length; ++i) {
    for (let j = 0; j <= 25; ++j) {
      const row3 = table3[i];
      const cell3 = row3.insertCell(j + 1);
      cell3.innerHTML = String.fromCharCode(97 + j);
    }
  }
  // Lowercase ASCII Letters
  for (let i = 0; i < table4.length; ++i) {
    for (let j = 0; j <= 25; ++j) {
      const row4 = table4[i];
      const cell4 = row4.insertCell(j + 1);
      cell4.innerHTML = 97+j;
    }
  }
  // Empty ASCII Table
  for (let i = 0; i < table5.length; ++i) {
    for (let j = 0; j <= 25; ++j) {
      const row5 = table5[i];
      const cell5 = row5.insertCell(j + 1);
    }
  }
  // fill in cell for second table 5
  table5[1].cells[1].innerHTML = '65';
}
fillTable();
