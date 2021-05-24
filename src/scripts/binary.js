function pad(num) {
    var s = "0000000" + num;
    return s.substr(s.length-8);
}

function fillTable() {
  const table = document.getElementsByClassName('table1');
  // skip the first row containing the header
  for (let i = 0; i < table.length; ++i) {
    for (let j = 1; j <= 26; ++j) {
      const row = table[i].insertRow(j);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      cell1.innerHTML = String.fromCharCode(64 + j);
      cell2.innerHTML = pad((   j).toString(2));
      cell3.innerHTML = pad((j+64).toString(2));
      cell4.innerHTML = pad((j+96).toString(2));
    }
  }
}
fillTable();

function encrypt() {
  const inputText = document.getElementById('encrypt-text').value;
  const option = document.querySelector('input[name="encrypt-option"]:checked').value;
  let stripText = inputText.replace(/[^A-Z a-z]/g, '');;
  let decrement = 0;
  if (option === 'one') {
    stripText = stripText.toUpperCase();
    decrement = -64;
  } else if (option === 'only-upper') {
    stripText = stripText.toUpperCase();
  } else if (option === 'only-lower') {
    stripText = stripText.toLowerCase();
  }
  let encryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < stripText.length; ++i) {
    if (stripText[i] === ' ') {
      encryptedMessage += '/ ';
    } else {
      encryptedMessage += pad((stripText.charCodeAt(i)+decrement).toString(2)) + ' ';
    }
  }

  document.getElementById('encrypt-text-output').innerHTML = encryptedMessage;
}

function decrypt() {
  const inputText = document.getElementById('decrypt-text').value;
  const stripText = inputText.replace(/[^01 /]/g, '');
  const numArray = stripText.split(' ');
  let decryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < numArray.length; ++i) {
    if (numArray[i] != '/') {
      charCode = parseInt(numArray[i], 2);
      if (charCode < 65) {
        charCode += 64;
      }
      decryptedMessage += String.fromCharCode(charCode);
    } else {
      decryptedMessage += ' ';
    }
  }
  document.getElementById('decrypt-text-output').innerHTML = decryptedMessage;
}
