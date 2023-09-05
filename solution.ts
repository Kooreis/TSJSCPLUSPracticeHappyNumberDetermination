function isHappy(n: number): boolean {
    let seen: {[key: number]: boolean} = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1;
}