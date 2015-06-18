var moveZeros = function (arr) {
  var front = arr.filter(function(val){
    return val !== 0;
  });

  return front.concat(Array.apply(null, Array(arr.length - front.length)).map(function(){return 0}));
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
