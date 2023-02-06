// 중복된 문자 제거

// 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return

function solution(str) {
    return [...new Set(str)].join("");
}

function solution(str) {
    let s = new Set(Array.from(str));
    return [...s.values()].join("");
}

solution("hello");   // helo