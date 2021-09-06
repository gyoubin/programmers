function solution(s){
    var p = 0;
    var y = 0;
    for(var i = 0; i<s.length; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            p++;
        }
        if(s[i] == 'y' || s[i] == 'Y'){
            y++;
        }
    }
    if(y == p)
        return true;
    else
        return false;
}