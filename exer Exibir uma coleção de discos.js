// Configuração
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Altere apenas o código abaixo desta linha
  function updateRecords(records, id, prop, value) {
    artista = recordCollection[id][prop]
    if (isNaN(artista)) {
        recordCollection[id][prop] = value
    } else if (prop === 'tracks') {
        if (isNaN(value)) {
            recordCollection[id][prop] = Array(value)
        } else {
            recordCollection[id][prop] = ""        
        }
        
    }
    return records;
  }
  
  console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
  console.log(updateRecords(recordCollection, 5439, "tracks", ""))