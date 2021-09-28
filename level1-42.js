function solution(answers) {
    var answer = [];
    var arr1 = [1,2,3,4,5];
    var arr2 = [2,1,2,3,2,4,2,5];
    var arr3 = [3,3,1,1,2,2,4,4,5,5];
    var correct = [0,0,0];
    for(let i=0; i<answers.length; i++){
        if(answers[i] == arr1[i%5]) correct[0]++;
        if(answers[i] == arr2[i%8]) correct[1]++;
        if(answers[i] == arr3[i%10]) correct[2]++;
    }
    if(correct[0] == Math.max(...correct)) answer.push(1);
    if(correct[1] == Math.max(...correct)) answer.push(2);
    if(correct[2] == Math.max(...correct)) answer.push(3);
    console.log(answer);
    return answer;
}