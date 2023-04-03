// 등수 구하기

// 각 배열에서 크기가 높은 순으로 순서를 출력

function solution(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1);  // [1,1,1,1,1];
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (arr[j] > arr[i]) answer[i]++;
        }
    }
    return answer;
}


let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));  // [4, 3, 2, 1, 5]