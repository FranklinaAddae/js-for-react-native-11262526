function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (index >= numbers.length) {
            return str;
        }

        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

const strings = ["Franklina", "Javascript", "Lina", "React", "Awesome"];
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); 