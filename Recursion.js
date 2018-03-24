//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
//2. Next, try looping just like above except using recursion
const countDownFrom = num => {
    if (num < 0) {
        return;
    }
    console.log(num);

    return countDownFrom(num - 1);
}

countDownFrom(5);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
const exponent = (base, expo) => {
    if (base < 0 ) {
        return;
    }
    console.log(Math.pow(base, expo));

    return exponent(base - 1, expo);
}

exponent(5, 5);

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
const recursiveMultiplier = (arr, num) => {
    let result = [];

    const work = (arr) => {
        if (arr.length === 0) {
            return;
        }

        let value = arr.pop();

        result.push(value * num);

        work(arr);
    }
    work(arr);

    return result.reverse();
}

let multiplierResult = recursiveMultiplier([1, 2, 3], 10);
console.log(multiplierResult);

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
const recursiveReverse = arr => {
    let result = [];

    const work = () => {
        if (arr.length === 0) {
            return;
        }

        let value = arr.pop();

        result.push(value);

        work(arr);
    }
    work(arr);

    return result;
}

let recursiveReverseResult = recursiveReverse([1, 2, 3]);
console.log(recursiveReverseResult);