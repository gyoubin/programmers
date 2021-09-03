function solution(s, n) {
    var answer = '';
    let al = '';
    for(var i=0;i<s.length;i++){
        al = s.charCodeAt(i);
        if(65 <= al && al <= 90){
            if((al+n) > 90)
                answer += String.fromCharCode(al+n-26);
            else
                answer += String.fromCharCode(al+n);
        } else if(97 <= al && al <= 122){
            if((al+n) > 122)
                answer += String.fromCharCode(al+n-26);
            else
                answer += String.fromCharCode(al+n);
        } else {
            answer += String.fromCharCode(al);
        }
    }
    return answer;
}