function pigIt(str){
  return str.split(' ').map(function(word){
    return [].filter.call(word, function(letter, index){
      return index;
    }).concat(word[0] + 'ay').join('');
  }).join(' ');
}
