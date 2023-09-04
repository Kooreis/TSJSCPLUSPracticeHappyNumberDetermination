```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

int getSum(int n) {
    int sum = 0;
    while (n) {
        int digit = n % 10;
        sum += digit * digit;
        n /= 10;
    }
    return sum;
}

bool isHappy(int n) {
    unordered_set<int> seen;
    while (n != 1 && seen.find(n) == seen.end()) {
        seen.insert(n);
        n = getSum(n);
    }
    return n == 1;
}

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    if (isHappy(num))
        cout << num << " is a happy number\n";
    else
        cout << num << " is not a happy number\n";
    return 0;
}
```