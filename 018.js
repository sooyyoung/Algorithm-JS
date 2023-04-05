// 최댓값 구하기

// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

let numbers = prompt('10개의 숫자를 공백 포함하여 입력하세요.').split(' ').map((n) => {
    return parseInt(n, 10);
});
  
numbers.sort((a, b) => {
    return b-a;
});

console.log(numbers[0]);