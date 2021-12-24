// 给定一个含有 n 个正整数的数组和一个正整数 s， 找出该数组中满足其和≥ s 的长度最小的 连续 子数组， 并返回其长度。 如果不存在符合条件的子数组， 返回 0。

// 示例：
// 输入： s = 7, nums = [2, 3, 1, 2, 4, 3] 输出： 2 解释： 子数组[4, 3] 是该条件下的长度最小的子数组。

// 滑动窗口法 => 双指针
// 当 窗口内的值大于 目标值的时候就需要移动
// var minSubArrayLen = function(target, nums) {
//     // 长度计算一次
//     const len = nums.length;
//     let l = r = sum = 0,
//         res = len + 1; // 子数组最大不会超过自身
//     while (r < len) {
//         sum += nums[r++];
//         // 窗口滑动
//         while (sum >= target) {
//             // r始终为开区间 [l, r)
//             res = res < r - l ? res : r - l;
//             sum -= nums[l++];
//         }
//     }
//     return res > len ? 0 : res;
// };