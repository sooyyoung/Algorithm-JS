// 문자 반복 출력하기

function solution(string, n) {
    let answer = [...string].map((v) => v.repeat(n)).join("");
    return answer;
}

solution("hello", 3);   // hhheeellllllooo
