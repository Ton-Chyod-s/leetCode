// Configuração
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Altere apenas o código abaixo desta linha
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            for (let j = 0; contacts[i]; j++) { 
                if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
                    switch (prop) {
                        case 'firstName':
                            return contacts[i].firstName;
                        case 'lastName':
                            return contacts[i].lastName;
                        case 'number':
                            return contacts[i].number;
                        case 'likes':
                            return contacts[i].likes;
                    } break
                } 
            }
        } else if (name !== contacts[i].firstName) {
            return 'No such contact';
        } else {
            return 'No such property';
        }
}
    // Altere apenas o código acima desta linha
  }
  
  //console.log(lookUpProfile("Kristian", "lastName"));
  //console.log(lookUpProfile("Sherlock", "likes"));
  //console.log(lookUpProfile("Harry", "likes"));
  console.log(lookUpProfile("Bob", "number"));
  console.log(lookUpProfile("Bob", "potato"));
  console.log(lookUpProfile("Akira", "address"));

