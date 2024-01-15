function checkObj(obj, checkProp) {
    // Altere apenas o código abaixo desta linha
    const encontrou = obj.hasOwnProperty(checkProp);
    if (encontrou) {
      return obj[checkProp]
    } else {
      return 'Not Found'
    }
    
  }
  
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")); // true
  console.log(checkObj({ top: 'hat', bottom: 'pants' }, 'middle')); // false