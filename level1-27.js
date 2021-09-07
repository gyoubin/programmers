function solution(arr, divisor) {
    var answer = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % divisor == 0)
            answer.push(arr[i]);
    }
    answer.sort((a,b) => {
        return a - b;
    });
    if(answer.length == 0)
        answer.push(-1);
    return answer;
}