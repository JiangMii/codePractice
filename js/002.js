var subsets = function (nums) {
  const res = [[]];
  const divide = (arr, index) => {
    if (index >= nums.length) {
      return;
    }

    const t = [...arr, nums[index]];
    res.push(t);
    console.log(t)
    divide(t, index + 1);

    divide(arr, index + 1);
  };

  divide([], 0);

  return res;
};

  
subsets([1,3,7])

// const a=[[]]
// let b=a.length
// console.log(b)