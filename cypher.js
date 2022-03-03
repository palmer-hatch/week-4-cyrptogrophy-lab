





function cypher(call){
    const alphabet = [
        'A','B','C','D','E','F',
        'G','H','I','J','K','L',
        'M','N','O','P','Q','R',
        'S','T','U','V','W','X',
        'Y','Z'
    ];
    
    
    
    let newText = call.split('')
    let arrCyph = []
    for(let i = 0; i<newText.length; i++){
        for(x = 0; x<alphabet.length; x++){
            if(newText[i]===alphabet[x]){
            
            
               arrCyph.push(alphabet[x+=2]) 
                
                
            }
        }
    }
    let newArrCyph = arrCyph.join('')
    return newArrCyph


}

console.log(cypher('I LOVE CRYPTOGROPHY'))