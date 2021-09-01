function solution(num) {
    var answer = 0;
    var tf = true;
    while(tf){
        if(answer == 500){
            return -1;
        }
        if(num == 1){
            return answer;
        } else if(num%2 == 0){
            num = num/2;
            answer++;
            continue;
        } else{
            num = num*3 +1;
            answer++;
            continue;
        }
    }
}