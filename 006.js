// 특정 문자 제거

function solution(string, letter) {
    const answer = string.split(letter).join("");
    return answer;
}

solution("abcdef", "a");   // bcdef
