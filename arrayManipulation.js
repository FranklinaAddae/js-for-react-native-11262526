function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

const inputArray = [6, 7, 8, 9, 12];
const processedArray = processArray(inputArray);
console.log(processedArray);