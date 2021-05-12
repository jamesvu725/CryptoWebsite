function fillTable() {
  const table = document.getElementsByClassName('table-content');
  for (let i = 0; i < table.length; ++i) {
    for (let j = 26; j >= 1; --j) {
      const row = table[i].insertRow(0);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.innerHTML = String.fromCharCode(64 + j);
      cell2.innerHTML = j;
    }
  }
}
fillTable();

function encrypt() {
  const inputText = document.getElementById('encrypt-text').value;
  const stripText = inputText.replace(/[0-9]/g, '').toUpperCase();
  let encryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < stripText.length; ++i) {
    charCode = stripText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      encryptedMessage += charCode - 64;
      encryptedMessage += ' ';
    }
  }
  document.getElementById('encrypt-text-output').innerHTML = encryptedMessage;
}

function decrypt() {
  const inputText = document.getElementById('decrypt-text').value;
  const stripText = inputText.toUpperCase().replace(/[A-Z]/g, '');
  const numArray = stripText.split(' ');
  let decryptedMessage = '';
  for (let i = 0; i < numArray.length; ++i) {
    decryptedMessage += String.fromCharCode(64+parseInt(numArray[i], 10));
    decryptedMessage += ' ';
  }
  document.getElementById('decrypt-text-output').innerHTML = decryptedMessage;
}
