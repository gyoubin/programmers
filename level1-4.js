function solution(phone_number) {
    var answer = '';
    const len = phone_number.length;
    for(var i=0;i < len; i++){
        if(i < len - 4)
            answer = answer + '*';
        else{
            answer = answer + phone_number[i];
        }
    }
    return answer;
}