function solution(s) {
    var answer = '';
    var str = s.split(' ');
    for(var i = 0; i < str.length; i++){
        var arr = str[i].split('');
        for(var j = 0; j < arr.length; j++){
            if(j % 2 == 0)
                answer += arr[j].toUpperCase();
            else
                answer += arr[j].toLowerCase();
        }
        if(i != str.length - 1)
            answer += ' ';
    }
    return answer;
}