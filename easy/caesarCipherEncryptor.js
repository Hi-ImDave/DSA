function caesarCipherEncryptor(string, key){
    const encryptedString = [];
    const newKey = key % 26;
    for(const letter of string){
        encryptedString.push(encryptString(letter, newKey));
    }
    return encryptedString.join('');
}

function encryptString(letter, key){
    const newCharCode = letter.charCodeAt() + key;
    return newCharCode <= 122 ? String.fromCharCode(newCharCode) : String.fromCharCode(96 + (newCharCode % 122))
}

caesarCipherEncryptor('xyz', 2)