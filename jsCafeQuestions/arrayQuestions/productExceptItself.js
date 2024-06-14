var productExceptSelf = function (nums) {
  var left = [];
  var right = new Array(nums.length).fill(undefined);
  var ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      left.push(nums[i]);
    } else left.push(left[i - 1] * nums[i]);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      right[i] = nums[i];
    } else right[i] = nums[i] * right[i + 1];
  }

  console.log(left, right);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      ans.push(right[i + 1]);
    } else if (i === nums.length - 1) {
      ans.push(left[i - 1]);
    } else {
      ans.push(left[i - 1] * right[i + 1]);
    }
  }

  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));
