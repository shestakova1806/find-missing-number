const isArithmeticProgression = array => {
    const arr = array.sort((a, b) => a - b);
    const d = arr[1] - arr[0];

    // if the difference is different an array is not an arithmetic progression
    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) !== d) {
            return false;
        }
    }

    return true;
}

const findMissingNumber = nums => {
    // check that an array is an arithmetic progression. If it is, there is no need to find missing number
    if (isArithmeticProgression(nums)) {
        return "There is no missing number.";
    }

    // find the sum of the sequence if we have all the numbers
    const expectedSum = ((Math.min(...nums) + Math.max(...nums)) * (nums.length + 1)) / 2;

    // find the real sum of the sequence 
    let sumOfArray = 0;
    for (let i = 0; i < nums.length; i++) {
        sumOfArray = sumOfArray + nums[i];
    }

    // find the difference between the sum that should be and the real sum
    return expectedSum - sumOfArray;
};

const number1 = findMissingNumber([5, 0, 1, 3, 2]);
console.log("Missing number: ", number1);

const number2 = findMissingNumber([1.5, 2.5, 3.5, 5.5, 6.5]);
console.log("Missing number: ", number2);

const number3 = findMissingNumber([7, 9, 10, 11, 12]);
console.log("Missing number: ", number3);

const number4 = findMissingNumber([-5, -3, 2, 1, -4, -1, -2]);
console.log("Missing number: ", number4);

const number5 = findMissingNumber([5, 5, 5, 5, 5]);
console.log("Missing number: ", number5);

const number6 = findMissingNumber([100, 500, 300, 700, 600, 400]);
console.log("Missing number: ", number6);

const number7 = findMissingNumber([100, 500, 300, 700, 600, 200, 400]);
console.log("Missing number: ", number7);
