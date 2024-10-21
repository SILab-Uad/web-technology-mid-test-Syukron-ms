const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

        // Variable to hold selected character set
        let charSet = "";
    
       

// TODO: generate the password based on the selected criteria 
if (options.includeUppercase) charSet += uppercase;
if (options.includeLowercase) charSet += lowercase;
if (options.includeNumbers) charSet += numbers;
if (options.includeSpecialChars) charSet += specialChars;

if (charSet === "") {
    alert("Please select at least one option for the password.");
    return "";
}

let password = "";
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
}

return password;
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

;