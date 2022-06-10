// for loop w array-----------------------------

let nums = [];

nums[0] = 5;
nums[99] = 9;

console.log(nums);

for(let n of nums){ // print all items in array
    console.log(n);
}

for(let key in nums){ // print indexs in array
    console.log(nums[key]);
}

