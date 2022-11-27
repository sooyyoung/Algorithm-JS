// 모음 제거

function solution(string) {
    return string.replace(/[aeiou]/g, "");
}

solution("nice to meet you");   // "nc t mt y"