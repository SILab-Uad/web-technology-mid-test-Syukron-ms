const generatePassword = (length, options) => {
    const charSets = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        specialChars: "!@#$%^&*()"
    };

    let charSet = '';
    if (options.includeUppercase) charSet += charSets.uppercase;
    if (options.includeLowercase) charSet += charSets.lowercase;
    if (options.includeNumbers) charSet += charSets.numbers;
    if (options.includeSpecialChars) charSet += charSets.specialChars;

    if (!charSet) {
        alert("Silakan pilih setidaknya satu opsi untuk kata sandi.");
        return "";
    }  
    return Array.from({ length }, () => charSet[Math.floor(Math.random() * charSet.length)]).join('');
};
document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };
    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').textContent = password;
});
