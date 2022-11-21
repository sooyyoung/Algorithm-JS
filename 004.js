// 자릿수 더하기

function solution(n) {
    return n
        .toString()
        .split('')
        .reduce((a, b) => a + parseInt(b), 0);
}

solution(1234);   // 10
solution(98765);   // 35