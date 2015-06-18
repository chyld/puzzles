function generateHashtag (str) {
  if(!str) return false;
  str = '#' + str.trim().split(' ').map(function(word){
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
  return str.length > 140 ? false : str;
}

