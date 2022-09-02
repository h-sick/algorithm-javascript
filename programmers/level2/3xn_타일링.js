function solution(n) {
    if(n < 2) return 0;
    
    const MOD = 1000000007;

    let unique = 0;
    const dp = Array(n+1).fill(0);
    dp[0] = 1;
    dp[2] = 3;

    for(let i=4; i<=n; i+=2) {
        unique += (dp[i-4] * 2) % MOD;
        dp[i] = (dp[i-2] * 3 + unique) % MOD;
    }
    return dp[n];
}

console.log(solution(4)) // 11