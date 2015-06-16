function nato(word){
  var letters =  {
      "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
      "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
      "G": "Golf",   "H": "Hotel",   "I": "India",
      "J": "Juliett","K": "Kilo",    "L": "Lima",
      "M": "Mike",   "N": "November","O": "Oscar",
      "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
      "S": "Sierra", "T": "Tango",   "U": "Uniform",
      "V": "Victor", "W": "Whiskey", "X": "X-ray",
      "Y": "Yankee", "Z": "Zulu"
    };

    return word.split('').map(function(letter){
      return letter.toUpperCase()
    }).map(function(letter){
      return letters[letter];
    }).join(" ");
}


console.log(nato('helloworld'));
