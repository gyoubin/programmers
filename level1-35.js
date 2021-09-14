function solution(left, right) {
    var answer = 0;
    for(var i=left; i<=right; i++){
        if(parseInt(Math.sqrt(i)) == Math.sqrt(i))
            answer -= i;
        else
            answer += i;
    }
    return answer;
}