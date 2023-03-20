// 가위 바위 보

// 가위 = 2, 바위 = 0, 보 = 5
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return

function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2,
    };
    let answer = [...rsp].map((v) => arr[v]).join("");
    return answer;
}

solution("205");   // "052"