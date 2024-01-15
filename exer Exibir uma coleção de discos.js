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
        tamanho = Object.keys(records[id]).length
        tamanhoTracks = records[id][prop]
        if (tamanho === 1) {
            records[id][prop] = value
        } else {
            if (isNaN(records[id][prop])) {
                if (records.hasOwnProperty(prop)) {
                    records[id][prop].push(value)
                } else {
                    if (prop === 'artist' && value !== '') {
                        records[id][prop] = value
                    } else if (prop === 'tracks' && value !== '') {
                        records[id][prop] = value
                    }
                }
            } else {
                if (records.hasOwnProperty(prop) === false) {
                    records[id][prop] = value
                } else {
                    delete records[id][prop]
                }
            }
        }
        return records;
    }

  console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
  console.log(recordCollection[5439]['artist'])
  console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))
  console.log(recordCollection[5439]['tracks'])
  console.log(updateRecords(recordCollection, 2548, "artist", ""))
  console.log(recordCollection[2548]['artist'])
  console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"))
  console.log(recordCollection[1245]['tracks'])