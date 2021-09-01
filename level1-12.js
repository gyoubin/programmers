function solution(n) {
    var arr = String(n).split('');
    var answer = parseInt(arr.sort(function(a,b){
        return b-a;
    }).join(''));
    return answer;
}