function solution(dart) {
    var answer = [3];
    let sum = [];
    var result = 0;
    let j = 0;
    for(var i=0; i<dart.length; i++){
        if(i == 0){
            sum[j] = dart[i];
            if(!isNaN(dart[1])){
                sum[j] += dart[1];
                i++;
            }
        } else if(isNaN(dart[i])){
            sum[j] += dart[i];
        } else {
            j++;
            sum[j] = dart[i];
            if(!isNaN(dart[i+1])){
                sum[j] += dart[i+1];
                i++;
            }
        }
    }
    for(var i=0; i<3; i++){
        var arr = sum[i].split('');
        if(!isNaN(arr[1])){
            arr[0] = 10;
            arr[1] = arr[2];
            arr[2] = arr[3];
        }
        if(arr[1] == 'S')
            answer[i] = arr[0];
        if(arr[1] == 'D')
            answer[i] = arr[0] * arr[0]; 
        if(arr[1] == 'T')
            answer[i] = arr[0] * arr[0] * arr[0];
        if(arr[2] == '*'){
            if(i == 0)
                answer[i] *= 2;
            else{
                answer[i-1] *= 2;
                answer[i] *= 2;
            }
        } else if(arr[2] == '#'){
                answer[i] *= -1;
        }      
    }
    result = Number(answer[0]) + Number(answer[1]) + Number(answer[2]);
    console.log(sum);
    return result;
}