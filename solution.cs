```javascript
function isHappy(n) {
    let seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1;
}

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
```