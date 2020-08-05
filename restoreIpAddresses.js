/**
 * @param {string} s
 * @return {string[]}
 */

 //给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。
var restoreIpAddresses = function(s) {
    let result = []
    function deal (s, last, times) {
        if (s == '') return
        if (times == 3 && s.length < 4) {
            if (s == "0") {
                const item = last.concat(s)
                result.push(item)  
            }
            if (Number(s) <= 255 && /^(?!0)/.test(s)) {
                const item = last.concat(s)
                result.push(item)
            }
        } else if (times < 3) {
            deal(s.slice(1), last.concat(s.slice(0,1)).concat("."), times + 1)
            if (/^(?!0)/.test(s.slice(0,2))) {
                deal(s.slice(2), last.concat(s.slice(0,2)).concat("."), times + 1)
            }
            if (/^(?!0)/.test(s.slice(0,3)) && Number(s.slice(0,3)) <= 255) {
                deal(s.slice(3), last.concat(s.slice(0,3)).concat("."), times + 1)
            }
        }
    }
    deal(s, "", 0)
    return result
};


console.log(restoreIpAddresses("00000"))