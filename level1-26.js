function solution(a, b) {
    var answer = 0;
    var small = Math.min(a,b);
    var big = Math.max(a,b)
    while(small<=big){
        answer += small;
        small++;
    }
    return answer;
}