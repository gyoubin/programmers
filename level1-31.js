function solution(n, arr1, arr2) {
    var result = [];
    var ar1 = [];
    var ar2 = [];
    let k = 0;
    ar1 = change(n,arr1);
    ar2 = change(n,arr2);
    for(let i=0; i<n;i++){
        result[i] = '';
        while(k < n*n){
            let j = k;
            if((ar1[j] == 0) && (ar2[j]) == 0)
                result[i] += ' ';
            else
                result[i] += '#';
            if((k+1) % n == 0){
                k++;
                break;
            }
            k++;
        }
    }
    return result;
}

function change(n,arr){
    var result=[];
    for(let i=0; i<n; i++){
        let num = arr[i];
        for(let j=2**(n-1); j>=1; j/=2){
            if(num < j)
                result.push(0);
            else{
                result.push(1);
                num = num%j;
            }
        }
    }
    return result;
}