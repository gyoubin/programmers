function solution(x) {
    var answer = true;
    var sum = 0;
    var str = String(x).split('');
    for(var i=0;i<str.length;i++){
        sum+=Number(str[i]);
    }
    if(x%sum!=0){
        answer = false;
    } else{
        answer = true;
    }
    return answer;
}