function solution(N, stages) {
    var failRate = [];
    var answer = [];
    
    for(let i=1; i<=N; i++){
        let rate = stages.filter(element => i == element).length / stages.filter(element => i <= element).length;
        failRate.push([rate,i]);
    }

    failRate.sort((b,a) => a[0] - b[0]);
    for(let i=0; i<failRate.length; i++)
        answer.push(failRate[i][1]);
    return answer;
}