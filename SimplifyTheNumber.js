function simplify(number){
    let results = [];
     let expanded = number.toString().split('')
     let testLength = expanded.length
     let count = 0;
     while(count!=testLength){
       factor = expanded.shift()
       count++
      if(testLength - count >= 1 && factor != 0){
        current = factor + '*'+'1'+'0'.repeat((testLength-count))+'+'
       results.push(current)}
       if(testLength-count==0 && factor != 0){
       results.push(factor)
       }
     } 
     let chKp = results.toString().split('')
     let CheckVal = chKp.pop()
     return CheckVal === '+' ? chKp.join('').replace(/[\,]/g, '') : results.join('')
   }


console.log(simplify(8964631))// --> 8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1
console.log(simplify(660)) // --> 6*100+6*10
console.log(simplify(56)) // --> 5*10+6
console.log(simplify(600)) // --> 6*100