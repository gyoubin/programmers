function solution(s) {
    let center = parseInt(s.length/2);
    if(s.length % 2 != 0)
        return s[center];
    else
        return s[center-1] + s[center];
}