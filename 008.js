// 대문자 소문자

// 대문자는 소문자로, 소문자는 대문자로 변환

function solution(str) {
    let answer = "";
    for (let c of str)
        answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}

solution("abCdEfghIJ");   // ABcDeFGHij
