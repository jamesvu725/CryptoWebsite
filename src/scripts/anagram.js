function encrypt() {
  const inputText = document.getElementById('encrypt-text').value;
  const stripText = inputText.toUpperCase().replace(/[^A-Z .]/g, '');
  let encryptedMessage = '';
  let charCode = 0;
  for (let i = 0; i < stripText.length; ++i) {
    charCode = stripText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      encryptedMessage += String.fromCharCode(90 - charCode + 65);
    } else if (stripText[i] === ' ') {
      encryptedMessage += ' ';
    }
  }
  document.getElementById('encrypt-text-output').innerHTML = encryptedMessage;
}
