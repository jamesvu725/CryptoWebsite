function fillTable() {
  const table1 = document.getElementsByClassName('table-row1');
  const table2 = document.getElementsByClassName('table-row2');
  const shiftNum = document.getElementById('shift').value;
  for (let i = 0; i < table1.length; ++i) {
    for (let j = 0; j <= 25; ++j) {
      const row1 = table1[i];
      const row2 = table2[i];
      const cell1 = row1.insertCell(j + 1);
      const cell2 = row2.insertCell(j + 1);
      cell1.innerHTML = String.fromCharCode(65 + j);
      cell2.innerHTML = String.fromCharCode(65 + (j + Number(shiftNum))%26);
    }
  }
}
fillTable();

function shiftTable(id) {
  const table1 = document.getElementsByClassName('table-row1');
  const table2 = document.getElementsByClassName('table-row2');
  const shiftNum = document.getElementById(id).value;
  let i = (id === 'shift') ? 0 : 1;
  for (let j = 0; j <= 25; ++j) {
    table1[i].cells[j+1].innerHTML = String.fromCharCode(65 + j);
    table2[i].cells[j+1].innerHTML = String.fromCharCode(65 + (j + Number(shiftNum))%26);
  }
}

function encrypt() {
  const inputText = document.getElementById('encrypt-text').value;
  const stripText = inputText.toUpperCase().replace(/[^A-Z .]/g, '');
  const shiftNum = Number(document.getElementById('encrypt-shift').value);
  let encryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < stripText.length; ++i) {
    charCode = stripText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      encryptedMessage += String.fromCharCode(65+(charCode-65+26+shiftNum)%26);
    } else if (stripText[i] === ' ') {
      encryptedMessage += ' ';
    }
  }
  document.getElementById('encrypt-text-output').innerHTML = encryptedMessage;
}

function decrypt() {
  const inputText = document.getElementById('decrypt-text').value;
  const stripText = inputText.toUpperCase().replace(/[^A-Z .]/g, '');
  const shiftNum = Number(document.getElementById('decrypt-shift').value);
  let decryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < stripText.length; ++i) {
    charCode = stripText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      decryptedMessage += String.fromCharCode(65+(charCode-65+26-shiftNum)%26);
    } else if (stripText[i] === ' ') {
      decryptedMessage += ' ';
    }
  }
  document.getElementById('decrypt-text-output').innerHTML = decryptedMessage;
}
