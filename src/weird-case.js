function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return [].map.call(word, function(letter, index){
      return index%2 ? letter.toLowerCase() : letter.toUpperCase();
    }).join('');
  }).join(' ');
}
