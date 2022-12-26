// 숫자 찾기

// num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return

function solution(num, k) {
    return num.toString().split("").indexOf(String(k)) + 1 || -1;
}

function solution(num, k) {
    let answer = num.toString();
    if (answer.includes(k)) {
        return answer.indexOf(k) + 1;
    } else {
        return -1;
    }
}


solution(29183, 1);   // 3 
solution(232443,4);   // 4
solution(123456, 7);   // -1