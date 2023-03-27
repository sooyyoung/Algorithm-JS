// 큰 수 출력하기

// 숫자로 이루어진 배열 내에서 자신의 바로 앞 수보다 큰 수만 출력

function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) answer.push(arr[i]);
    }
    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));   //7 9 6 12