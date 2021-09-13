function solution(scores) {
    var answer = '';
    for(var i=0; i<scores.length; i++){
        let arr = [];
        let sm = [];
        let bi = [];
        let sum = 0;
        let score = 0;
        for(var j=0; j<scores.length; j++){
            arr.push(scores[j][i]);
        }
        arr.forEach((element) => {
           if(((Math.max(...arr) == arr[i])&&only(arr,arr[i])) || ((Math.min(...arr) == arr[i])&&only(arr,arr[i]))){
               sum += element;
               score = (sum - arr[i]) / (scores.length-1);
           } else {
               sum += element;
               score = sum / scores.length;
           }
        });
        answer += grade(score);
    }
    return answer;
}
    
function grade(score){
    if(score >= 90) return 'A';
    else if(score >= 80) return 'B';
    else if(score >= 70) return 'C';
    else if(score >= 50) return 'D';
    else return 'F';
}

function only(arr, score){
    var st = [];
    arr.forEach((element) => {
       if(score == element)
           st.push(element);
    });
    if(st.length == 1)
        return true;
    else
        return false;
}