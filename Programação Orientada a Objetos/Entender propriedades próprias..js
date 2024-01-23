function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Altere apenas o código abaixo desta linha
  
  for (let i in canary) {
    if (canary.hasOwnProperty(i)) { 
      ownProps.push(i)
    }
  }