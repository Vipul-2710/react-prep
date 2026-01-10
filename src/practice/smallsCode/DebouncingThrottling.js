// Debouncing is nothing but causing a delay in executing a function for a certain amount of time.
//  Suppose we have input and we need to make an API call as per input
//  in that case we can use debouncing to ensure that the API call will done after some time interval.
function debounce(func, dtime) {
    let timer;
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    return function () {
      timer = setTimeout(function () {
        func.apply(context, args);
      }, dtime);
    };
  }

// Throttling is the same concept as debouncing but instead of delaying function execution, 
// it will limit the rate of function execution for a particular time. 

function throttle(callback, delay = 1000) {
      let shouldWait = false;
      return (...args) => {
        if (shouldWait) return;
        callback(...args);
        shouldWait = true;
        setTimeout(() => {
              shouldWait = false;
        }, delay);
      };
}