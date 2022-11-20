// 배열의 평균값

function solution(num) {
    let answer = num.reduce((a, b) => a + b, 0) / num.length;
    return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);   // 5.5