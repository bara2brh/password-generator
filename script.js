let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2",
    "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$",
    "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",",
    "|", ":", ";", "<", ">", ".", "?", "/"];

let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");
let passwordLengthEl = document.getElementById("length-input");
let passwordLength = 8;
let isSymbols = document.querySelector("#symbols-checkbox").checked;
let isNumbers = document.querySelector("#numbers-checkbox").checked;

// increments the password length
function increment() {
    passwordLength++;
    passwordLengthEl.value = passwordLength;
}

//decrements the password length
function decrement() {

    if (passwordLength > 1) {
        passwordLength--;
        passwordLengthEl.value = passwordLength;
    }

}

function filterCharacters() {
    isSymbols = document.querySelector("#symbols-checkbox").checked;
    isNumbers = document.querySelector("#numbers-checkbox").checked;
    let filteredChars = characters;
    if (!isSymbols && !isNumbers) {
        filteredChars = characters.filter(char => {
            return (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91
                || char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
        })
    }
    else if (!isSymbols && isNumbers) {
        filteredChars = characters.filter(char => {
            return (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91
                || char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123
                || char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58)
        })
    }
    else if (isSymbols && !isNumbers) {
        filteredChars = characters.filter(char => {
            return (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91
                || char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123
                || char.charCodeAt(0) > 32 && char.charCodeAt(0) < 48
                || char.charCodeAt(0) > 57 && char.charCodeAt(0) < 65
                || char.charCodeAt(0) > 90 && char.charCodeAt(0) < 97
                || char.charCodeAt(0) > 122 && char.charCodeAt(0) < 127)
        })
    }
    return filteredChars;
}


function generatePassword() {
    password1El.style.opacity = "1";
    password2El.style.opacity = "1";

    let password1 = "";
    let password2 = "";
    let filteredChars = filterCharacters();
    for (let i = 0; i < passwordLength; i++) {

        let random = Math.floor(Math.random() * filteredChars.length);
        let random2 = Math.floor(Math.random() * filteredChars.length);
        password1 += filteredChars[random];
        password2 += filteredChars[random2];
    }

    password1El.textContent = password1;
    password2El.textContent = password2;

}

function copy(passwordNumber) {
    let password = "";
    if (passwordNumber == 1) {
        password = password1El.textContent;
        document.getElementById("firstToolTip").textContent = "Password Copied!";
        setTimeout(() => {
            document.getElementById("firstToolTip").textContent = "Copy to clipboard";

        }, 2000)
    }
    else {
        password = password2El.textContent;
        document.getElementById("secondToolTip").textContent = "Password Copied!";
        setTimeout(() => {
            document.getElementById("secondToolTip").textContent = "Copy to clipboard";

        }, 2000)
    }

    navigator.clipboard.writeText(password);

}