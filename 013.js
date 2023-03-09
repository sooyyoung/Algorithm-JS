// 짝수는 싫어요

// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return

function solution(n) {
    let answer = [];
    for (let i = 1; i <= n; i += 2) answer.push(i);
    return answer;
}

function solution(n) {
    return Array(n)
        .fill(1)
        .map((v, i) => v + i)
        .filter((v) => v % 2 === 1);
}

solution(10)  // [1, 3, 5, 7, 9]