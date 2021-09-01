function solution(n, m) {
    var answer = [];
    var arr1 = [];
    var arr2 = [];
    for(var i=1; i < n+1; i++){
        for(var j=1; j < m+1; j++){
            if((n%i==0)&&(m%j==0)){
                if(i==j)
                    answer[0] = i;
            }
        }
    }
    answer[1] = n*m/answer[0];
    return answer;
}