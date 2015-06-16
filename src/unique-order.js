var uniqueInOrder=function(iterable){
  return Array.prototype.reduce.call(iterable, function(array, value, index){
    if(value !== array[array.length - 1])
      array.push(value);
    return array;
  }, []);
}
