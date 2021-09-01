function solution(arr) {
    var i;
    let min = Math.min(...arr);
    if(arr.length == 1)
        return [-1];
    for(i=0;i < arr.length; i++){
        if(arr[i] == min)
            break;
    }
    arr.splice(i,1);
    return arr;
}