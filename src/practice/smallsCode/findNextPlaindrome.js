function isPalindrome(num) {
    return num === num.split("").reverse().join("");
  }
  function findNextPalindrome(num) {
    let n = num + 1; BH
    while (true) {
      if (isPalindrome(n.toString())) {
        return n;
      }
      n++;
    }
  }

  console.log(findNextPalindrome(105));

//   Fibonachi
function fib(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }
  let fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }

  return fibSeries;
}

// Example usage:
console.log(fib(2));