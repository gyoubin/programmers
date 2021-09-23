function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => {
        return a - b;
    });
    for(let i=0; i<d.length; i++){
        if(budget >= d[i]){
            answer++;
            budget -= d[i];
        }
    }
    return answer;
}