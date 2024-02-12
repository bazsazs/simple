function pairs(array) {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (Math.abs(array[i] - array[i + 1]) === 1) {
            count++;
            i++; // Skip the next element as it's part of the pair
        }
    }
    return count;
}

// Test cases
console.log(pairs([1,2,5,8,-4,-3,7,6,5]));  // Output: 3
