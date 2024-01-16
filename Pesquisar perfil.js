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
        const firstName = contacts[i].firstName
        const lastName = contacts[i].lastName
        const number = contacts[i].number
        const likes = contacts[i].likes
        
        if (name === firstName && contacts[i].hasOwnProperty(prop)) {
            console.log(firstName)
        }


    }
    // Altere apenas o código acima desta linha
  }
  
  lookUpProfile("Akira", "likes");