Array.prototype.groupBy = function(fn){
  fn = fn || function(x){ return x; };

  return this.reduce(function(obj, val){
    var key = fn(val);
    obj[key] ? obj[key].push(val) : obj[key] = [val];
    return obj;
  }, {});
};

// -------------------------------------------- //

var x = [1,2,3,2,4,1,5,1,6].groupBy();
console.log(x);
var y = [1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
console.log(y);
