


var maximumWealth = function(accounts) {
    

    let richest =0;
    for(let i=0; i< accounts.length; i++){

        let total = 0;

        for(let j = 0; j<accounts[i].length;j++){
            total+= accounts[i][j];
        }

        if(total>richest){
            richest = total;
        }
    }

    return richest;
};

console.log(maximumWealth())

