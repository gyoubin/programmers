function solution(n) {
    for(var x = 1; x*x <= n ; x++){
        if(x*x == n){
            return (x+1)*(x+1);
        }
    }
    return -1;
}