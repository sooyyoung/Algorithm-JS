// 7의 개수

// 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return

function solution(array) {
    return array.join("").split("7").length - 1;
}

solution([7, 77, 17]);   // 4
solution([10, 29]);   // 0