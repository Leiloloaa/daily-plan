// 给你一个按 非递减顺序 排序的整数数组 nums， 返回 每个数字的平方 组成的新数组， 要求也按 非递减顺序 排序。

// 示例 1： 输入： nums = [-4, -1, 0, 3, 10] 输出：[0, 1, 9, 16, 100] 解释： 平方后， 数组变为[16, 1, 0, 9, 100]， 排序后， 数组变为[0, 1, 9, 16, 100]

// 示例 2： 输入： nums = [-7, -3, 2, 3, 11] 输出：[4, 9, 9, 49, 121]

// 暴力破解： 通过循环平方， 然后排序 时间复杂度超过了 O(n) 我们需要控制在 O(n)

// 双指针的思路，定义一个新数组 result
// 1、数组本身就是有序的，只是平方之后可能会变大
// 2、最大值一定是在最右边
function sortedSquares(nums) {
    let result = []
    result.length = nums.length
    let left = 0,
        right = nums.length - 1,
        i = result.length - 1
    while (left <= right) {
        let leftVal = nums[left] * nums[left],
            rightVal = nums[right] * nums[right]
        if (leftVal < rightVal) {
            result[i--] = rightVal
            right--
        } else {
            result[i--] = leftVal
            left++
        }
    }
    return result
}

let nums = [-4, -1, 0, 3, 10]

let res = sortedSquares(nums)
console.log(res);