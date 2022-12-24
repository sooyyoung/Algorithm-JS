// 배열 회전시키기

// 배열 numbers의 원소를 direction 방향으로 한 칸씩 회전시킨 배열 return

function solution(numbers, direction) {
    let answer = [];
    if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    answer = numbers;
    return answer;
}

function solution(numbers, direction) {
    return direction === "right"
        ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
        : [...numbers.slice(1), numbers[0]];
}


solution([1, 2, 3], "right");   // [3, 1, 2]
solution([4, 455, 6, 4, -1, 45, 6], "left");   // [455, 6, 4, -1, 45, 6, 4]