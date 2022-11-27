function solution(k, score) {
    const stack = [];
    const answer = [];

    for(let i=0; i<score.length; i++) {
        const eachScore = score[i];

        if(stack.length < k) {
            stack.push(eachScore);
            answer.push(Math.min(...stack));
            continue;
        }

        if(Math.min(...stack) >= eachScore) {
            answer.push(Math.min(...stack));
            continue;
        }

        stack.sort((a,b) => b - a);
        stack.pop();
        stack.push(eachScore);
        answer.push(Math.min(...stack));
    }
    return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])) // 	[10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])) // 	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]