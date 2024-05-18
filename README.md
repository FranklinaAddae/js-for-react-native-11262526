# Assignment README

## Student ID: 11262526

## Overview

This project consists of multiple tasks that use JavaScript to manipulate texts and arrays. A brief explanation of each task accomplished for this assignment is provided below.

## Task 1: processArray Function

### Description:
An array of numbers is given to the `processArray` function, which creates a new array where:
- Each even number is squared.
- Each odd number is tripled.

### Example:
```javascript
const inputArray = [6, 7, 8, 9, 12];
const processedArray = processArray(inputArray);
console.log(processedArray);
// Output: [36, 21, 64, 27, 144]
```

## Task 2: formatArrayStrings Function

### Description:
The `formatArrayStrings` function takes two arrays as arguments:
- An array of strings.
- An array of numbers processed by `processArray`.

Every string is altered by the function according to its matching number:
- If the number is even, capitalises the entire string.
- If the number is odd, the string is converted to lowercase.

### Example:
```javascript
const strings = ["Hello", "World", "JavaScript", "Is", "Awesome"];
const numbers = processArray([1, 2, 3, 4, 5]);
const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings);
// Output: ["hello", "WORLD", "javascript", "IS", "awesome"]
```

## Task 3: createUserProfiles Function

### Description:
The `createUserProfiles` function takes two arrays:
- An array of original names.
- An array of modified names from Task 2.

The function returns an array of objects, each containing:
- `originalName`: The original name.
- `modifiedName`: The modified name.
- `id`: An auto-incremented ID starting from 1.

### Example:
```javascript
const originalNames = ["Franklina", "JavaScript", "Lina", "React", "Awesome"];
const modifiedNames = ["FRANKLINA", "javascript", "LINA", "react", "AWESOME"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
// Output:
// [
//     { id: 1, originalName: 'Franklina', modifiedName: 'FRANKLINA' },
//     { id: 2, originalName: 'JavaScript', modifiedName: 'javascript' },
//     { id: 3, originalName: 'Lina', modifiedName: 'LINA' },
//     { id: 4, originalName: 'React', modifiedName: 'react' },
//     { id: 5, originalName: 'Awesome', modifiedName: 'AWESOME' }
// ]
```