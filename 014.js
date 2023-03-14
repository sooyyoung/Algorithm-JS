// 중앙값 구하기

// 중앙값 - 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값
// 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return

function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

solution([1, 2, 7, 10, 11]);   // 7
solution([9, -1, 0]);   // 0