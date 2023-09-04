```typescript
function isHappy(n: number): boolean {
    let seen: {[key: number]: boolean} = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1;
}

function sumOfSquares(n: number): number {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

// Test the function
console.log(isHappy(19));  // Output: true
console.log(isHappy(2));   // Output: false
```