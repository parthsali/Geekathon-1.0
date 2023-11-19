function generateRandomNumber(rng, lowerBound, upperBound) {
    return Math.floor(rng() % (upperBound - lowerBound + 1) + lowerBound);
}

let primeNumbers = [];
let bufferCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '}', '{', '|', '`'];
let randomCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '_', '+', '=', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', '{', '}', ']', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', ':', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '/'];




function sieveOfEratosthenes(n) {
    let array = new Array(n + 1).fill(0);
    let resultVector = [];

    for (let i = 2; i <= n; i++) {
        if (array[i] === 0) {
            resultVector.push(i);
            for (let j = 2 * i; j <= n; j += i) {
                array[j] = 1;
            }
        }
    }

    return resultVector;
}

function modularExponentiation(base, exponent, modulus) {
    if (exponent === 0) {
        return 1;
    }

    let result = modularExponentiation(base, Math.floor(exponent / 2), modulus) % modulus;

    if (exponent % 2 === 1) {
        return (result * result * base) % modulus;
    } else {
        return (result * result) % modulus;
    }
}

function diffieHellmanKeyExchange(base, privateA, privateB) {
    const primeModulus = 7919;
    const publicKeyA = modularExponentiation(base, privateA, primeModulus);
    const publicKeyB = modularExponentiation(base, privateB, primeModulus);
    const secretKeyA = modularExponentiation(publicKeyB, privateA, primeModulus);
    const secretKeyB = modularExponentiation(publicKeyA, privateB, primeModulus);
    return secretKeyA;
}



function addBufferCharacters(key) {
    let invertedNumber = 0;
    const bufferCharactersCount = bufferCharacters.length;
    let bufferString = "";

    for (let i = 62; i >= 0; i--) {
        if ((key >> i) & 1) {
        } else {
            invertedNumber += 1 << i;
        }
    }

    let difference = key - invertedNumber;
    if (difference < 0) {
        difference *= -1;
    }

    const startIndex = invertedNumber % bufferCharactersCount;
    const endIndex = difference % bufferCharactersCount;

    bufferString += bufferCharacters[startIndex];

    let randomNumber = Math.floor(Math.random() * 25);
    while (randomNumber > 0) {
        let index = Math.floor(Math.random() * randomCharacters.length);
        if (randomCharacters[index] !== bufferCharacters[startIndex] && randomCharacters[index] !== bufferCharacters[endIndex]) {
            bufferString += randomCharacters[index];
            randomNumber--;
        }
    }

    bufferString += bufferCharacters[endIndex];
    return bufferString;
}

function calculateStartAndEndCharacters(key) {
    let invertedNumber = 0;
    const bufferCharactersCount = bufferCharacters.length;

    for (let i = 62; i >= 0; i--) {
        if ((key >> i) & 1) {
        } else {
            invertedNumber += 1 << i;
        }
    }

    let difference = key - invertedNumber;
    if (difference < 0) {
        difference *= -1;
    }

    const startIndex = invertedNumber % bufferCharactersCount;
    const endIndex = difference % bufferCharactersCount;

    return [bufferCharacters[startIndex], bufferCharacters[endIndex]];
}


const maxNumber = 1e6;
primeNumbers = sieveOfEratosthenes(maxNumber);
const secretKey = diffieHellmanKeyExchange(7911, 1567689892, 292787734);


function encryptMessage(message, key = secretKey) {
    const messageLength = message.length;
    const primesCount = primeNumbers.length;
    let encryptedText = "";
    let j = 0;
    let currentIndex = key + ((key >> j & 1) << (j));
    let skips = key + ((key >> j & 1) << (j));
    currentIndex = currentIndex % primesCount;
    let i = 0;

    while (i < messageLength) {
        const multiplication = primeNumbers[currentIndex] * message.charCodeAt(i);
        const multiplicationString = multiplication.toString();
        encryptedText += multiplicationString;
        encryptedText += addBufferCharacters(skips);
        j++;
        i++;

        if (j === 63) {
            j = 0;
        }

        skips = key + ((key >> j & 1) << (j));
        currentIndex += skips;
        currentIndex = currentIndex % primesCount;
    }

    return encryptedText;
}

function decryptMessage(cypher, key = secretKey) {
    const cypherLength = cypher.length;
    const primesCount = primeNumbers.length;
    let decryptedText = "";
    let j = 0;
    let currentIndex = key + ((key >> j & 1) << (j));
    let skips = key + ((key >> j & 1) << (j));
    currentIndex = currentIndex % primesCount;
    let i = 0;
    let number = "";

    while (i < cypherLength && cypher[i] >= '0' && cypher[i] <= '9') {
        number += cypher[i];
        i++;
    }

    let d = parseInt(number, 10);
    const currentPrimeNumber = primeNumbers[currentIndex];
    d = Math.floor(d / currentPrimeNumber);
    decryptedText += String.fromCharCode(d);

    let startAndEnd = calculateStartAndEndCharacters(skips);

    while (cypher[i] !== startAndEnd[1]) {
        i++;
    }
    i++;

    while (i < cypherLength) {
        let number = "";
        while (i < cypherLength && cypher[i] >= '0' && cypher[i] <= '9') {
            number += cypher[i];
            i++;
        }

        const numberValue = parseInt(number, 10);

        j++;

        if (j === 63) {
            j = 0;
        }

        skips = key + ((key >> j & 1) << (j));
        currentIndex += skips;
        currentIndex = currentIndex % primesCount;

        const currentPrimeNumber = primeNumbers[currentIndex];
        decryptedText += String.fromCharCode(Math.floor(numberValue / currentPrimeNumber));

        startAndEnd = calculateStartAndEndCharacters(skips);

        while (cypher[i] !== startAndEnd[1]) {
            i++;
        }
        i++;
    }

    return decryptedText;
}



// let message = "";
// let temp;

// message = "Hello World!";

// console.log("Message: " + message + "\n");


// const encryptedMessage = encryptMessage(message, secretKey);
// console.log("Encrypted message: " + encryptedMessage + "\n");


// const decryptedMessage = decryptMessage(encryptedMessage, secretKey);
// console.log("Decrypted message: " + decryptedMessage + "\n");


// console.log("Are equal: " + (message === decryptedMessage));

module.exports = {
    encryptMessage,
    decryptMessage,
}




