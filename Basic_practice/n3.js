// console.log(is_Blank(''));
// console.log(is_Blank('abc'));



function blanckChecker(){
    let input = "ab cd"

    if(input.includes(" ")){
        return "String is blank";
    }
    else{
        return "Not blank";
    }
}

console.log(blanckChecker())