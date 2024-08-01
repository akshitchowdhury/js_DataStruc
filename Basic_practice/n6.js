// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"





function emailProtector(email){
    let part1 = email.split("@")[0]
    let part2 = email.split("@")[1]
    
    
    let finalPart1 = part1.substring(0,part1.length/2)
    
    console.log(finalPart1+"...@"+part2.toString())
    
}

emailProtector("akshit_chowdhury@gmail.com")
emailProtector("aakash214_gogoi@gmail.com")
emailProtector("RakeshJH_2145@gmail.com")