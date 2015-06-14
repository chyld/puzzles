function firstUniqueLetter(word){
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


console.log(firstUniqueLetter('toothbrush'));
