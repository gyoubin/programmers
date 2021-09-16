function solution(weights, head2head) {
    var answer = [];
    let Rank = [];
    for(var i=0; i<weights.length; i++){
        var boxer = [];
        let win = 0, lose = 0, bigWin = 0;
        for(var j=0; j<head2head.length; j++){
            if(head2head[i][j] == 'N') continue;
            if(head2head[i][j] == 'W') {
                win++;
                if(weights[i] < weights[j])
                    bigWin++;
            }
            if(head2head[i][j] == 'L') 
                lose++;
        }
        boxer.push(win/(win+lose),bigWin,weights[i],i+1);
        Rank.push(boxer);
    }
    console.log(Rank);
    Rank.sort((a,b) => {
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        if (a[2] > b[2]) return -1;
        if (a[2] < b[2]) return 1;
        if (a[3] > b[3]) return 1;
        if (a[3] < b[3]) return -1;
        return 0;
    });
    for(var i=0; i<Rank.length; i++)
        answer.push(Rank[i][3]);
    return answer;
}