function solution(table, languages, preference) {
    var answer = '';
    let result = 0;
    for(var i=0; i<table.length; i++){
        var arr = table[i].split(' ');
        var sum = 0;
        for(var j=0;j<languages.length;j++){
            let idx = arr.indexOf(languages[j]);
            console.log(idx);
            if(idx > 0)
                sum += preference[j] * (6-idx);
            console.log(sum);
        }
        if(sum > result){
            result = sum;
            answer = arr[0];
        }
        if(sum == result){
            if(answer > arr[0])
                answer = arr[0];
        }
    }
    return answer;
}