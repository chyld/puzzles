function firstUniqueLetter1(word){
  var histogram = {};

  for(var i = 0; i < word.length; i++){
    histogram[word[i]] =
    {
      count: histogram[word[i]] ? histogram[word[i]].count + 1 : 1,
      index: i,
      letter: word[i]
    };
  }

  var letters = [];
  for(var key in histogram){
    letters.push(histogram[key]);
  }

  letters.sort(function(a, b){
    return a.index - b.index;
  });

  for(var i = 0; i < letters.length; i++){
    if(letters[i].count === 1){
      return letters[i];
    }
  }
}

function firstUniqueLetter2(word){
  for(var i = 0; i < word.length; i++){
    var letter = word[i];
    var first = word.indexOf(letter);
    var last = word.lastIndexOf(letter);
    if(last === first) return letter;
  }
}
