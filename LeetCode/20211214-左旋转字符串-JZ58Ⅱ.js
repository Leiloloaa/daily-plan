// 左旋转字符串

// 示例 1：
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"

// 示例 2：
// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"

function reverseLeftStr(s, k) {
    const len = s.length
    let i = 0
    while (i < len - k) {
        s = s[len - 1] + s
        i++
    }
    return s.slice(0, len)
}

const res = reverseLeftStr('abcde', 2)
console.log(res);