function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a,b) => {
        if(a[n] > b[n]) return 1;
        if(b[n] > a[n]) return -1;
        if(a[n] == b[n]){
            if(a > b) return 1;
            if(a < b) return -1;
            if(a == b) return 0;
        }
                 });
    return answer;
}