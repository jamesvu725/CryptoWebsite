function encrypt() {
  const inputText = document.getElementById('encrypt-text').value;
  const stripText = inputText.toUpperCase().replace(/[^A-Z0-9]/g, '');
  let encryptedMessage = '';
  let morse = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
  let morseNum = ['.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----'];
  let charCode = 0;
  for (let i = 0; i < stripText.length; ++i) {
    charCode = stripText.charCodeAt(i);
    // if char is an alphabet letter
    if (charCode >= 65 && charCode <= 90) {
      encryptedMessage += morse[charCode - 65];
    // if char is a number
    } else if (charCode >= 48 && charCode <= 57) {
      encryptedMessage += morse[charCode - 48];
    }
    // adds gap if not last char
    if (i != stripText.length - 1) {
      encryptedMessage += ' / ';
    }
  }
  document.getElementById('encrypt-text-output').innerHTML = encryptedMessage;
}

function getLetter(letter) {
  switch (letter) {
    case '.-'   : return 'A'; break;
    case '-...' : return 'B'; break;
    case '-.-.' : return 'C'; break;
    case '-..'  : return 'D'; break;
    case '.'    : return 'E'; break;
    case '..-.' : return 'F'; break;
    case '--.'  : return 'G'; break;
    case '....' : return 'H'; break;
    case '..'   : return 'I'; break;
    case '.---' : return 'J'; break;
    case '-.-'  : return 'K'; break;
    case '.-..' : return 'L'; break;
    case '--'   : return 'M'; break;
    case '-.'   : return 'N'; break;
    case '---'  : return 'O'; break;
    case '.--.' : return 'P'; break;
    case '--.-' : return 'Q'; break;
    case '.-.'  : return 'R'; break;
    case '...'  : return 'S'; break;
    case '-'    : return 'T'; break;
    case '..-'  : return 'U'; break;
    case '...-' : return 'V'; break;
    case '.--'  : return 'W'; break;
    case '-..-' : return 'X'; break;
    case '-.--' : return 'Y'; break;
    case '--..' : return 'Z'; break;
    case '.----': return '1'; break;
    case '..---': return '2'; break;
    case '...--': return '3'; break;
    case '....-': return '4'; break;
    case '.....': return '5'; break;
    case '-....': return '6'; break;
    case '--...': return '7'; break;
    case '---..': return '8'; break;
    case '----.': return '9'; break;
    case '-----': return '0'; break;
    default     : return '';
  }
}

function decrypt() {
  const inputText = document.getElementById('decrypt-text').value;
  const stripText = inputText.toUpperCase().replace(/[^-./]/g, '');
  const numArray = stripText.split('/');
  let decryptedMessage = '';
  for (let i = 0; i < numArray.length; ++i) {
    decryptedMessage += getLetter(numArray[i]);
  }
  document.getElementById('decrypt-text-output').innerHTML = decryptedMessage;
}
