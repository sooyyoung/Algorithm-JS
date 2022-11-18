// 2-gram

// 2-gram이란? 문자열에서 2개의 연속된 요소를 출력하는 방법

// **입력**
// Javascript

// **출력**
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

const text = prompt('문자열을 입력하세요');

for(i = 0; i < text.length - 1; i++){
    console.log(text[i], text[i + 1]);
}