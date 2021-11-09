// Rotate Array

// var rotate = function (nums, k) {
//   function rotate(left, right ) {
//     while (left < right) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++;
//       right--;
//     }
//   }
//   k = k % nums.length;
//   nums.reverse();
//   rotate(0, k - 1);
//   rotate(k, nums.length - 1);
// };

var rotate = function (nums, k) {
  k = k % nums.length;
  let poped = nums.splice(nums.length - k, k);
  nums.unshift(...poped);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
