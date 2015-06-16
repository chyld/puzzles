function sumDigits(number){
  return Array.prototype.reduce.call(Math.abs(number).toString(), function(sum, letter){
    return sum + parseInt(letter);
  }, 0);
}
