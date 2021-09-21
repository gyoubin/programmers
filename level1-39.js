function solution(n) {
    var answer = 0;
    var arr = [];
    if(n < 3)
        return n;
    for(let i=0; n>=3; i++){
        arr[i] = n % 3;
        n = parseInt(n/3);
        if(n < 3)
            arr[i+1] = n;
    }
    for(let i=0; i<arr.length; i++){
        answer += Math.pow(3,arr.length-i-1) * arr[i];
    }
    return answer;
}