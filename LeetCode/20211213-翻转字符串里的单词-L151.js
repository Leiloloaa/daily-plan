// 利用 js 内置函数解决问题
// function reverseStr(str) {
//     let strArr = str.split(' ').filter(item => item != '');
//     console.log(strArr)
//     return strArr.reverse().join(' ')
// }

// 利用指针
function reverseStr(str) {
    let strArr = Array.from(str);
    // 去除多余空格
    removeExtraSpace(strArr);
    // 双指针反转
    reverseArr(strArr, 0, strArr.length - 1);
    let start = 0;
    // 根据空格来出来 单词 反转
    for (let i = 0; i < strArr.length + 1; i++) {
        // 如果是等于空格 或者是 只有一个单词的情况
        if (strArr[i] === ' ' || i === strArr.length) {
            reverseArr(strArr, start, i - 1);
            start = i + 1
        }
    }
    return strArr.join('')
}


function removeExtraSpace(strArr) {
    let fastIndex = 0
    let slowIndex = 0
    while (fastIndex < strArr.length) {
        // 如果等于空格 并且前一个也是空格 或者是 第一个 那么就要快速移动指针
        if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
            fastIndex++
        } else {
            strArr[slowIndex++] = strArr[fastIndex++]
        }
    }
    // 处理最后一个字符串是空格的情况
    // 直接判断长度
    strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex
}

function reverseArr(strArr, start, end) {
    let left = start,
        right = end
    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        left++;
        right--;
    }
}




const str = ' his is   cute'
const res = reverseStr(str)
console.log(res);